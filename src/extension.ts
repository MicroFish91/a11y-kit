import * as vscode from "vscode";
import { displayMenu } from "./menu";

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand("abkit.menu", () => displayMenu(context))
  );
}

// this method is called when your extension is deactivated
export function deactivate() {}
