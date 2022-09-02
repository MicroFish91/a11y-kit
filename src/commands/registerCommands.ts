import { commands, ExtensionContext } from "vscode";
import { ext } from "../extensionVariables";
import { treeCommands } from "./treeCommands";

export function registerCommands(context: ExtensionContext) {
  context.subscriptions.concat([
    commands.registerCommand("a11y-kit.menu", async (context: ExtensionContext) => await ext.a11yMenu.display(context)),
    commands.registerCommand("a11y-kit.sandbox", async (context: ExtensionContext) => await ext.sandboxMenu.display(context)),
    ...treeCommands(),
  ]);
}
