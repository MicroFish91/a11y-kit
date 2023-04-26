import { Component, ComponentOption } from "../IComponent";
import { showErrorMessageWithButtons, showInformationMessage, showInformationMessageWithButtons, showWarningMessageWithButtons } from "./showMessage";

const SM_OPTIONS: ComponentOption[] = [
  {
    label: "Show Information Message",
    description: "showInformationMessage",
    cb: showInformationMessage,
  },
  {
    label: "Show Information Message With Buttons",
    description: "showInformationMessageWithButtons",
    cb: showInformationMessageWithButtons,
  },
  {
    label: "Show Warning Message With Buttons",
    description: "showWarningMessageWithButtons",
    cb: showWarningMessageWithButtons,
  },
  {
    label: "Show Error Message With Buttons",
    description: "showErrorMessageWithButtons",
    cb: showErrorMessageWithButtons,
  },
];

const label: string = "Show Message";

export const smComponent: Component = {
  label,
  optionsList: SM_OPTIONS
};

