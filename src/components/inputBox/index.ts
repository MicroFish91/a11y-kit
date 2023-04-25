import { Component, ComponentOption } from "../../menu/IComponent";
import { createInputBox, createInputBoxWithPassword } from "./createInputBox";
import { showInputBox, showInputBoxWithPassword } from "./showInputBox";

const IB_OPTIONS: ComponentOption[] = [
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

const label: string = "Input Box";

export const ibComponent: Component = {
  label,
  optionsList: IB_OPTIONS
};
