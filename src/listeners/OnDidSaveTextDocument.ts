import * as vscode from 'vscode';
import {config, validateConfig} from '../utils/config';
import {isSupportedIacFile, isSupportedPackageFile} from '../constants';
import {scaScan} from '../services/scanners/ScaScanner';
import {iacScan} from '../services/scanners/IacScanner';
import {secretScan} from '../services/scanners/SecretScanner';
import {container} from 'tsyringe';
import {IExtensionService} from '../services/ExtensionService';
import {ExtensionServiceSymbol} from '../symbols';
import {getVsCodeRootPathPrefix} from '../utils/GlobalConfig';

export const OnDidSaveTextDocument = (document: vscode.TextDocument) => {
  if (!config.scanOnSaveEnabled) {
    return;
  }

  if (validateConfig()) {
    return;
  }

  const fileFsPath = document.uri.fsPath;
  if (!fileFsPath) {
    return;
  }

  const projectPath = vscode.workspace.workspaceFolders?.[0]?.uri.fsPath;

  const vsCodeAppRootPrefix = getVsCodeRootPathPrefix();
  if (fileFsPath.startsWith(vsCodeAppRootPrefix)) {
    // user can trigger save of a VS Code settings files which we don't want to scan
    return;
  }

  const extension = container.resolve<IExtensionService>(ExtensionServiceSymbol);

  if (isSupportedPackageFile(document.fileName)) {
    scaScan(
        {
          config,
          pathToScan: fileFsPath,
          workspaceFolderPath: projectPath,
          diagnosticCollection: extension.diagnosticCollection,
        },
        extension.treeView,
    );
  }

  if (isSupportedIacFile(document.fileName)) {
    iacScan(
        {
          config,
          pathToScan: fileFsPath,
          workspaceFolderPath: projectPath,
          diagnosticCollection: extension.diagnosticCollection,
        },
        extension.treeView,
    );
  }

  // run Secrets scan on any saved file. CLI will exclude irrelevant files
  secretScan(
      {
        config,
        pathToScan: document.fileName,
        workspaceFolderPath: projectPath,
        diagnosticCollection: extension.diagnosticCollection,
      },
      extension.treeView,
  );
};
