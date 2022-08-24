import { commands } from "vscode";
import { IComponent } from "../../menu/IComponent";
import { OptionsList } from "../../utils";
export * from "./BinarySearchTreeProvider";

const TV_OPTIONS: OptionsList[] = [
  {
    label: "Display Tree View",
    description: "displayTreeView",
    cb: displayTreeView,
  },
];

const label: string = "Tree View";

export const tvComponent: IComponent = {
  label,
  optionsList: TV_OPTIONS
}

function displayTreeView() {
  commands.executeCommand("treeView.focus");
}
