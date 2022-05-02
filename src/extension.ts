import * as vscode from "vscode";
import { showQuickPicks } from "./commands";

export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "abkit" is now active!');

  context.subscriptions.concat([
    vscode.commands.registerCommand("abkit.showQuickPicks", showQuickPicks),
  ]);
}

// this method is called when your extension is deactivated
export function deactivate() {}
