import { commands, ExtensionContext } from "vscode";
import { createAndRegisterA11yMenu } from "../menu/createAndRegisterMenu";
import { treeCommands } from "./treeView";

export function registerCommands(context: ExtensionContext) {
  const a11yMenu = createAndRegisterA11yMenu();

  context.subscriptions.concat([
    commands.registerCommand("a11y-kit.menu", async (context: ExtensionContext) => await a11yMenu.display(context)),
    ...treeCommands(),
  ]);
}
