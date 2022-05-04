import { createQuickPicksSingle } from "./createQuickPicks";
import { showQuickPicksMany, showQuickPicksSingle } from "./showQuickPicks";

export const QP_OPTIONS = {
  [`SQP_SINGLE`]: {
    label: "Quick Picks: Show Quick Picks - Single",
    description: "showQuickPicksSingle",
    cb: showQuickPicksSingle,
  },
  [`SQP_MANY`]: {
    label: "Quick Picks: Show Quick Picks - Many",
    description: "showQuickPicksMany",
    cb: showQuickPicksMany,
  },
  [`CQP_SINGLE`]: {
    label: "Quick Picks: Create Quick Picks - Single",
    description: "createQuickPicksSingle",
    cb: createQuickPicksSingle,
  },
};
