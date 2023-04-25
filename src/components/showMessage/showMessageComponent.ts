import { Component, ComponentOption } from "../IComponent";
import { showInformationMessage } from "./showMessage";
import { showWarningMessage } from "./showMessage";
import { showErrorMessage } from "./showMessage";

const SM_OPTIONS: ComponentOption[] = [
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

export const smComponent: Component = {
  label,
  optionsList: SM_OPTIONS
};