import * as vscode from "vscode";
import { displayMenu } from "./menu";

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand("abkit.selectFeature", () => displayMenu(context))
  );
}

// this method is called when your extension is deactivated
export function deactivate() {}
