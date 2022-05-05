import { commands, ExtensionContext } from "vscode";
import { displayMenu } from "../menu";
import { treeCommands } from './treeView';

export function registerCommands(context: ExtensionContext) {
  context.subscriptions.concat([
    commands.registerCommand("abkit.menu", () => displayMenu(context)),
    ...treeCommands()
  ]);
}
