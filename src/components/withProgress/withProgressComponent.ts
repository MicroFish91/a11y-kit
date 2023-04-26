import { ProgressLocation } from "vscode";
import { Component, ComponentOption } from "../IComponent";
import { withProgress } from "./withProgress";

const WP_OPTIONS: ComponentOption[] = [
  {
    id: "withProgressNotification",
    label: "With Progress - Notification",
    cb: () => withProgress(ProgressLocation.Notification),
  },
  {
    id: "withProgressWindow",
    label: "With Progress - Window",
    cb: () => withProgress(ProgressLocation.Window),
  }
];

const label: string = "Progress";

export const wpComponent: Component = {
  label,
  optionsList: WP_OPTIONS
};
