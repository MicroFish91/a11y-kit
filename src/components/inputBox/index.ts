import { QuickPickItemKind } from "vscode";
import { createCbMapper, createMenuItems } from "../../utils";
import { CustomQuickPickItem } from "../quickPicks/CustomQuickPickItem";
import { createInputBox, createInputBoxWithPassword } from "./createInputBox";
import { showInputBox, showInputBoxWithPassword } from "./showInputBox";

export const IB_OPTIONS = [
  {
    label: "Show Input Box without Password",
    description: "showInputBox",
    cb: showInputBox,
  },
  {
    label: "Show Input Box with Password",
    description: "showInputBoxWithPassword",
    cb: showInputBoxWithPassword,
  },
  {
    label: "Create Input Box without Password",
    description: "createInputBox",
    cb: createInputBox,
  },
  {
    label: "Create Input Box with Password",
    description: "createInputBoxWithPassword",
    cb: createInputBoxWithPassword,
  },
];

export const inputBoxCbMap = createCbMapper(IB_OPTIONS);

export const inputBoxMenuItems = [
  new CustomQuickPickItem("Input Box", QuickPickItemKind.Separator),
  ...createMenuItems(IB_OPTIONS),
];
