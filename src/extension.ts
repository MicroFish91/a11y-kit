import * as vscode from "vscode";
import { registerCommands } from "./commands";

export function activate(context: vscode.ExtensionContext) {
  console.log("Starting ABKit extension.");
  registerCommands(context);
}

// this method is called when your extension is deactivated
export function deactivate() {}
