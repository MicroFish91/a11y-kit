import { commands, QuickPickItemKind } from "vscode";
import { createCbMapper, createMenuItems, OptionsList } from "../../utils";
import { CustomQuickPickItem } from "../quickPicks/CustomQuickPickItem";
export * from "./BinarySearchTreeProvider";

export const TV_OPTIONS: OptionsList[] = [
  {
    label: "Display Tree View",
    description: "displayTreeView",
    cb: displayTreeView,
  },
];

export const treeViewCbMap = createCbMapper(TV_OPTIONS);
export const treeViewMenuItems = [
  new CustomQuickPickItem("Tree View", QuickPickItemKind.Separator),
  ...createMenuItems(TV_OPTIONS),
];

function displayTreeView() {
  commands.executeCommand("treeView.focus");
}
