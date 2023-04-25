import { Component, ComponentOption } from "../../menu/IComponent";
import {
  createQuickPicksMany,
  createQuickPicksSingle,
} from "./createQuickPicks";
import { showQuickPicksMany, showQuickPicksSingle } from "./showQuickPicks";

const QP_OPTIONS: ComponentOption[] = [
  {
    label: "Show Quick Picks - Single",
    description: "showQuickPicksSingle",
    cb: showQuickPicksSingle,
  },
  {
    label: "Show Quick Picks - Many",
    description: "showQuickPicksMany",
    cb: showQuickPicksMany,
  },
  {
    label: "Create Quick Picks - Single",
    description: "createQuickPicksSingle",
    cb: createQuickPicksSingle,
  },
  {
    label: "Create Quick Picks - Many",
    description: "createQuickPicksMany",
    cb: createQuickPicksMany,
  },
];

const label: string = "Quick Picks";

export const qpComponent: Component = {
  label,
  optionsList: QP_OPTIONS
};