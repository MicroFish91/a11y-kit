import { Component, ComponentOption } from "../IComponent";
import { showErrorMessageWithButtons, showInformationMessage, showInformationMessageWithButtons, showWarningMessageWithButtons } from "./showMessage";

const SM_OPTIONS: ComponentOption[] = [
  {
    id: "showInformationMessage",
    label: "Show Information Message",
    cb: showInformationMessage,
  },
  {
    id: "showInformationMessageWithButtons",
    label: "Show Information Message With Buttons",
    cb: showInformationMessageWithButtons,
  },
  {
    id: "showWarningMessageWithButtons",
    label: "Show Warning Message With Buttons",
    cb: showWarningMessageWithButtons,
  },
  {
    id: "showErrorMessageWithButtons",
    label: "Show Error Message With Buttons",
    cb: showErrorMessageWithButtons,
  },
];

const label: string = "Show Message";

export const smComponent: Component = {
  label,
  optionsList: SM_OPTIONS
};

