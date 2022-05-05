import { createCbMapper, createMenuItems } from "../../utils";
import { createInputBox, createInputBoxWithPassword } from "./createInputBox";
import { showInputBox, showInputBoxWithPassword } from "./showInputBox";

export const IB_OPTIONS = [
  {
    label: "Input Box - Show Input Box without Password",
    description: "showInputBox",
    cb: showInputBox
  },
  {
    label: "Input Box - Show Input Box with Password",
    description: "showInputBoxWithPassword",
    cb: showInputBoxWithPassword
  },
  {
    label: "Input Box - Create Input Box without Password",
    description: "createInputBox",
    cb: createInputBox
  },
  {
    label: "Input Box - Create Input Box with Password",
    description: "createInputBoxWithPassword",
    cb: createInputBoxWithPassword
  }
];

export const inputBoxCbMap = createCbMapper(IB_OPTIONS);
export const inputBoxMenuItems = createMenuItems(IB_OPTIONS);