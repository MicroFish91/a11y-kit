import { ExtensionContext, window } from "vscode";
import { quickPickCbMap, quickPickItems } from "./quickPicks";

export async function displayMenu(context: ExtensionContext) {
  const cbMaps = { ...quickPickCbMap };
  const menuItems = [...quickPickItems];
  const picked = await window.showQuickPick(menuItems);
  if (!picked) return;
  cbMaps[picked.description](context);
}
