import { IComponent } from "../../menu/IComponent";
import { IComponentOption } from "../../menu/IComponentOption";
import {
  createQuickPicksMany,
  createQuickPicksSingle,
} from "./createQuickPicks";
import { showQuickPicksMany, showQuickPicksSingle } from "./showQuickPicks";

const QP_OPTIONS: IComponentOption[] = [
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

export const qpComponent: IComponent = {
  label,
  optionsList: QP_OPTIONS
};