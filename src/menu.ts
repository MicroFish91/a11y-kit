import { ExtensionContext, window } from "vscode";
import { inputBoxCbMap, inputBoxMenuItems } from "./inputBox";
import { quickPickCbMap, quickPickMenuItems } from "./quickPicks";
import { treeViewCbMap, treeViewMenuItems } from "./treeView";

export async function displayMenu(context: ExtensionContext) {
  const cbMaps = { ...quickPickCbMap, ...inputBoxCbMap, ...treeViewCbMap };
  const menuItems = [...quickPickMenuItems, ...inputBoxMenuItems, ...treeViewMenuItems];
  const picked = await window.showQuickPick(menuItems);
  if (!picked) return;
  cbMaps[picked.description](context);
}
