import { ProgressLocation } from "vscode";
import { Component, ComponentOption } from "../../menu/IComponent";
import { withProgress } from "./withProgress";

const WP_OPTIONS: ComponentOption[] = [
  {
    label: "With Progress - Notification",
    description: "withProgressNotification",
    cb: () => withProgress(ProgressLocation.Notification),
  },
  {
    label: "With Progress - Window",
    description: "withProgressWindow",
    cb: () => withProgress(ProgressLocation.Window),
  }
];

const label: string = "Progress";

export const wpComponent: Component = {
  label,
  optionsList: WP_OPTIONS
};
