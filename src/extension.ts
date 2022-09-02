import * as vscode from "vscode";
import { registerCommands } from "./commands/registerCommands";
import { ext } from "./extensionVariables";
import { createAndRegisterA11yMenu, createAndRegisterSandboxMenu } from "./menu/createAndRegisterMenu";

export function activate(context: vscode.ExtensionContext) {
  console.log("Starting a11y-kit extension.");
  ext.a11yMenu = createAndRegisterA11yMenu();
  ext.sandboxMenu = createAndRegisterSandboxMenu();

  registerCommands(context);
}

export function deactivate() {}
