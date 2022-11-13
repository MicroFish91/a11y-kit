import { ProgressLocation } from "vscode";
import { IComponent, IComponentOption } from "../../menu/IComponent";
import { withProgress } from "./withProgress";

const WP_OPTIONS: IComponentOption[] = [
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

export const wpComponent: IComponent = {
  label,
  optionsList: WP_OPTIONS
};
