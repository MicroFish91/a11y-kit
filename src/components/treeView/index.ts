import { commands } from "vscode";
import { IComponent, IComponentOption } from "../../menu/IComponent";
export * from "./BinarySearchTreeProvider";

const TV_OPTIONS: IComponentOption[] = [
  {
    label: "Display Tree View",
    description: "displayTreeView",
    cb: displayTreeView,
  }
];

const label: string = "Tree View";

export const tvComponent: IComponent = {
  label,
  optionsList: TV_OPTIONS
};

function displayTreeView() {
  commands.executeCommand("treeView.focus");
}
