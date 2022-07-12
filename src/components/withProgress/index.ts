import { ProgressLocation, QuickPickItemKind } from "vscode";
import { createCbMapper, createMenuItems, OptionsList } from "../../utils";
import { CustomQuickPickItem } from "../quickPicks/CustomQuickPickItem";
import { withProgress } from "./withProgress";


export const WP_OPTIONS: OptionsList[] = [
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

export const withProgressCbMap = createCbMapper(WP_OPTIONS);
export const withProgressMenuItems = [
  new CustomQuickPickItem("Progress", QuickPickItemKind.Separator),
  ...createMenuItems(WP_OPTIONS),
];
