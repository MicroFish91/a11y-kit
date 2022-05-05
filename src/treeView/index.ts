import { createCbMapper, createMenuItems, OptionsList } from "../utils";
import { initTreeView } from "./displayTreeView";

export const TV_OPTIONS: OptionsList[] = [
  {
    label: "Tree View - Initialize Tree",
    description: "initTreeView",
    cb: initTreeView
  },
];

export const treeViewCbMap = createCbMapper(TV_OPTIONS);
export const treeViewMenuItems = createMenuItems(TV_OPTIONS);