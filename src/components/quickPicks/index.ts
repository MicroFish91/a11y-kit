import { QuickPickItemKind } from "vscode";
import { createCbMapper, createMenuItems, OptionsList } from "../../utils";
import { createQuickPicksMany, createQuickPicksSingle } from "./createQuickPicks";
import { CustomQuickPickItem } from "./CustomQuickPickItem";
import { showQuickPicksMany, showQuickPicksSingle } from "./showQuickPicks";

export const QP_OPTIONS: OptionsList[] = [
  {
    label: "Quick Picks: Show Quick Picks - Single",
    description: "showQuickPicksSingle",
    cb: showQuickPicksSingle,
  },
  {
    label: "Quick Picks: Show Quick Picks - Many",
    description: "showQuickPicksMany",
    cb: showQuickPicksMany,
  },
  {
    label: "Quick Picks: Create Quick Picks - Single",
    description: "createQuickPicksSingle",
    cb: createQuickPicksSingle,
  },
  {
    label: "Quick Picks: Create Quick Picks - Many",
    description: "createQuickPicksMany",
    cb: createQuickPicksMany,
  },
];

export const quickPickCbMap = createCbMapper(QP_OPTIONS);
export const quickPickMenuItems = [
  new CustomQuickPickItem("Quick Picks", QuickPickItemKind.Separator),
  ...createMenuItems(QP_OPTIONS),
];
