import { IComponent, IComponentOption } from "../../menu/IComponent";
import { showInformationMessage } from "./showMessage";
import { showWarningMessage } from "./showMessage";
import { showErrorMessage } from "./showMessage";

const SM_OPTIONS: IComponentOption[] = [
  {
    label: "Show Information Message",
    description: "showInformationMessage",
    cb: showInformationMessage,
  },
  {
    label: "Show Warning Message",
    description: "showWarningMessage",
    cb: showWarningMessage,
  },
  {
    label: "Show Error Message",
    description: "showErrorMessage",
    cb: showErrorMessage,
  },
];

const label: string = "Show Message";

export const smComponent: IComponent = {
  label,
  optionsList: SM_OPTIONS
};