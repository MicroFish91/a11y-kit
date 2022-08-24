import { ProgressLocation } from "vscode";
import { IComponent } from "../../menu/IComponent";
import { OptionsList } from "../../utils";
import { withProgress } from "./withProgress";

const WP_OPTIONS: OptionsList[] = [
  {
    label: "With Progress - Notification",
    description: "withProgressNotification",
    cb: () => withProgress(ProgressLocation.Notification),
  },
  {
    label: "With Progress - Window",
    description: "withProgressWindow",
    cb: () => withProgress(ProgressLocation.Window),
  },
];

const label: string = "Progress";

export const wpComponent: IComponent = {
  label,
  optionsList: WP_OPTIONS
}
