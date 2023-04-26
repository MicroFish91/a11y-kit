import { commands } from "vscode";
import { Component, ComponentOption } from "../IComponent";
export * from "./BinarySearchTreeProvider";

const TV_OPTIONS: ComponentOption[] = [
  {
    id: "displayTreeView",
    label: "Display Tree View",
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
