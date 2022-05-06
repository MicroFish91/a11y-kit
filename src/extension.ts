import * as vscode from "vscode";
import { registerCommands } from "./commands";

export function activate(context: vscode.ExtensionContext) {
  console.log("Starting a11y-kit extension.");
  registerCommands(context);
}

export function deactivate() {}
