import { Component, ComponentOption } from "../IComponent";
import {
  createQuickPicksMany,
  createQuickPicksSingle,
} from "./createQuickPicks";
import { showQuickPicksMany, showQuickPicksSingle } from "./showQuickPicks";

const QP_OPTIONS: ComponentOption[] = [
  {
    id: "showQuickPicksSingle",
    label: "Show Quick Picks - Single",
    cb: showQuickPicksSingle,
  },
  {
    id: "showQuickPicksMany",
    label: "Show Quick Picks - Many",
    cb: showQuickPicksMany,
  },
  {
    id: "createQuickPicksSingle",
    label: "Create Quick Picks - Single",
    cb: createQuickPicksSingle,
  },
  {
    id: "createQuickPicksMany",
    label: "Create Quick Picks - Many",
    cb: createQuickPicksMany,
  },
];

const label: string = "Quick Picks";

export const qpComponent: Component = {
  label,
  optionsList: QP_OPTIONS
};