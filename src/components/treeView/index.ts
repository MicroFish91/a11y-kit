import { commands } from "vscode";
import { Component, ComponentOption } from "../IComponent";
export * from "./BinarySearchTreeProvider";

const TV_OPTIONS: ComponentOption[] = [
  {
    label: "Display Tree View",
    description: "displayTreeView",
    cb: displayTreeView,
  }
];

const label: string = "Tree View";

export const tvComponent: Component = {
  label,
  optionsList: TV_OPTIONS
};

function displayTreeView() {
  commands.executeCommand("treeView.focus");
}
