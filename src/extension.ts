import * as vscode from "vscode";
import { showInputBox } from "./showInputBox";

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.concat([
    vscode.commands.registerCommand(
      "a11y-kit.inputBox",
      async (_context: vscode.ExtensionContext) => await showInputBox()
    ),
  ]);
}

export function deactivate() {}
