import { commands } from "vscode";
import { createCbMapper, createMenuItems, OptionsList } from "../../utils";
export * from "./BinarySearchTreeProvider";

export const TV_OPTIONS: OptionsList[] = [
  {
    label: "Tree View - Display Tree",
    description: "displayTreeView",
    cb: displayTreeView
  },
];

export const treeViewCbMap = createCbMapper(TV_OPTIONS);
export const treeViewMenuItems = createMenuItems(TV_OPTIONS);

function displayTreeView() {
  commands.executeCommand("treeView.focus");
}