import { ExtensionContext } from "vscode";
import { createQuickPicksMany, createQuickPicksSingle } from "./createQuickPicks";
import { showQuickPicksMany, showQuickPicksSingle } from "./showQuickPicks";

export const QP_OPTIONS: QuickPickOption[] = [
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

export const quickPickCbMap = QP_OPTIONS.reduce(
  (
    acc: Record<string, (context: ExtensionContext) => any>,
    { description, cb }: QuickPickOption
  ) => {
    acc[description] = cb;
    return acc;
  },
  {}
);

export const quickPickItems = QP_OPTIONS.map(({ label, description }: QuickPickOption) => {
  return { label, description };
});

export type QuickPickOption = {
  label: string;
  description: string;
  cb: (context: ExtensionContext) => any;
};
