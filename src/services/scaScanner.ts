import * as vscode from "vscode";
import { extensionOutput } from "../logging/extension-output";
import { cliWrapper } from "../cli-wrapper/cli-wrapper";
import statusBar from "../utils/status-bar";
import {
  StatusBarTexts,
  TrayNotificationTexts,
  extensionId,
} from "../utils/texts";
import { validateCliCommonErrors } from "./common";
import { getWorkspaceState, updateWorkspaceState } from "../utils/context";
import { ScaDetection } from "../types/detection";
import { IConfig } from "../cli-wrapper/types";
import TrayNotifications from "../utils/TrayNotifications";


interface ScaScanParams {
  workspaceFolderPath: string;
  diagnosticCollection: vscode.DiagnosticCollection;
  config: IConfig;
}

type ProgressBar = vscode.Progress<{ message?: string; increment?: number }>;

// Entry
export async function scaScan(
  context: vscode.ExtensionContext,
  params: ScaScanParams,
) {
  if (getWorkspaceState("scan.isScanning")) {
    return;
  }
  vscode.window.withProgress(
    {
      location: vscode.ProgressLocation.Notification,
    },
    async (progress) => {
      await _scaScanWithProgress(params, progress);
    }
  );
}

const _initScanState = (params: ScaScanParams, progress: ProgressBar) => {
  extensionOutput.info(StatusBarTexts.ScanWait);
  statusBar.showScanningInProgress();

  extensionOutput.info(
    "Initiating SCA scan for path: " + params.workspaceFolderPath
  );
  updateWorkspaceState("scan.isScanning", true);

  progress.report({
    message: `Scanning ${params.workspaceFolderPath}...`,
  });
};

const _finalizeScanState = (success: boolean, progress?: ProgressBar) => {
  updateWorkspaceState("scan.isScanning", false);

  if (success) {
    statusBar.showScanComplete();
  } else if (!success && progress) {
    statusBar.showScanError();
    vscode.window.showErrorMessage(TrayNotificationTexts.ScanError);
    progress.report({ increment: 100 });
  }
};

const _runCliScaScan = async (params: ScaScanParams): Promise<any> => {
  // Run scan through CLI
  let cliParams = {
    path: params.workspaceFolderPath,
    workspaceFolderPath: params.workspaceFolderPath,
    config: params.config,
  };


  const { result, error, exitCode } = await cliWrapper.runScaScan(
    cliParams
  );

  if (validateCliCommonErrors(error, exitCode)) {
    return;
  }

  // Check if an error occurred
  if (error && !result.detections?.length) {
    throw new Error(error);
  }

  extensionOutput.info(
    "Scan complete: " + JSON.stringify({ result, error }, null, 3)
  );

  return result;
};


const _scaScanWithProgress = async (params: ScaScanParams, progress: ProgressBar) => {
  try {
    _initScanState(params, progress);

    const scanResult = await _runCliScaScan(params);
    await handleScanDetections(scanResult, params.diagnosticCollection);

    _finalizeScanState(true);
  } catch (error) {
    _finalizeScanState(false, progress);

    extensionOutput.error("Error while creating scan: " + error);
  }
};

export const detectionsToDiagnostics = async (
  detections: ScaDetection[]
): Promise<Record<string, vscode.Diagnostic[]>> => {
  const result: Record<string, vscode.Diagnostic[]> = {};

  for (const detection of detections) {
    const { detection_details } = detection;
    const file_name = detection_details.file_name;
    const uri = vscode.Uri.file(file_name);
    const document = await vscode.workspace.openTextDocument(uri);

    let message = `Severity: ${detection.severity}\n`;
    message += `${detection.message}\n`;
    if (detection_details.alert?.first_patched_version) {
      message += `First patched version: ${detection_details.alert?.first_patched_version}\n`;
    }
    message += `Rule ID: ${detection.detection_rule_id}`;

    const diagnostic = new vscode.Diagnostic(
      document.lineAt(detection_details.line_in_file).range,
      message,
      vscode.DiagnosticSeverity.Error
    );

    diagnostic.source = extensionId;
    diagnostic.code = detection.detection_rule_id;
    result[file_name] = result[file_name] || [];
    result[file_name].push(diagnostic);
  }

  return result;
};

const handleScanDetections = async (
  result: any,
  diagnosticCollection: vscode.DiagnosticCollection
) => {
  if (result.detections) {
    const diagnostics = await detectionsToDiagnostics(result.detections);

    // iterate over diagnostics
    // add the diagnostics to the diagnostic collection
    for (const [filePath, fileDiagnostics] of Object.entries(diagnostics)) {
      const uri = vscode.Uri.file(filePath);
      diagnosticCollection.set(uri, fileDiagnostics); // Show in "problems" tab
    }

    if (result.detections.length && !getWorkspaceState("cycode.notifOpen")) {
      updateWorkspaceState("cycode.notifOpen", true);
      TrayNotifications.showProblemsDetection(Object.keys(diagnostics).length);
    }
  }
};
