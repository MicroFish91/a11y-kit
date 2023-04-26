import { Component, ComponentOption } from "../IComponent";
import { createInputBox, createInputBoxWithPassword } from "./createInputBox";
import { showInputBox, showInputBoxWithPassword } from "./showInputBox";

const IB_OPTIONS: ComponentOption[] = [
  {
    id: "showInputBox",
    label: "Show Input Box without Password",
    cb: showInputBox,
  },
  {
    id: "showInputBoxWithPassword",
    label: "Show Input Box with Password",
    cb: showInputBoxWithPassword,
  },
  {
    id: "createInputBox",
    label: "Create Input Box without Password",
    cb: createInputBox,
  },
  {
    id: "createInputBoxWithPassword",
    label: "Create Input Box with Password",
    cb: createInputBoxWithPassword,
  },
];

const label: string = "Input Box";

export const ibComponent: Component = {
  label,
  optionsList: IB_OPTIONS
};
