import * as vscode from "vscode";
import { extensionOutput } from "../logging/extension-output";
import { cliWrapper } from "../cli-wrapper/cli-wrapper";
import { validateCliCommonErrors } from "./common";
import { onAuthFailure, onAuthSuccess } from "../utils/auth/auth_common";
import { prettyPrintJson } from "../utils/text_formatting";
import { IConfig } from "../cli-wrapper/types";

export async function authCheck(config: IConfig) {
  extensionOutput.showOutputTab();

  vscode.window.withProgress(
    {
      location: vscode.ProgressLocation.Window,
    },
    async (progress) => {
      try {
        progress.report({
          message: `Authenticating check with Cycode...`,
        });

        const authCheckResult = await cliWrapper.runAuthCheck(config);
        const {
          error,
          exitCode,
          result: { result: isAuthenticated },
        } = authCheckResult;

        if (validateCliCommonErrors(error, exitCode)) {
          return;
        }

        handleAuthStatus(isAuthenticated);
      } catch (error) {
        const errorMessage = `Auth check failed to complete with the following error: ${error}`;
        extensionOutput.error(prettyPrintJson({ errorMessage }));
        onAuthFailure();
      }
    }
  );
}

function handleAuthStatus(isAuthenticated: boolean): void {
  isAuthenticated === true ? onAuthCheckSuccess() : onAuthFailure();
}

function onAuthCheckSuccess(): void {
  onAuthSuccess();
  const output = `Auth check completed successfully with an "authenticated" status`;
  extensionOutput.info(output);
}
