import { ExtensionContext, window } from "vscode";
import { quickPickCbMap, quickPickMenuItems } from "./quickPicks";

export async function displayMenu(context: ExtensionContext) {
  const cbMaps = { ...quickPickCbMap };
  const menuItems = [...quickPickMenuItems];
  const picked = await window.showQuickPick(menuItems);
  if (!picked) return;
  cbMaps[picked.description](context);
}
