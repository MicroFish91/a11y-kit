import { ExtensionContext, window } from "vscode";
import { inputBoxCbMap, inputBoxMenuItems } from "./inputBox";
import { quickPickCbMap, quickPickMenuItems } from "./quickPicks";

export async function displayMenu(context: ExtensionContext) {
  const cbMaps = { ...quickPickCbMap, ...inputBoxCbMap };
  const menuItems = [...quickPickMenuItems, ...inputBoxMenuItems];
  const picked = await window.showQuickPick(menuItems);
  if (!picked) return;
  cbMaps[picked.description](context);
}
