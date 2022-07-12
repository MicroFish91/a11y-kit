import { ExtensionContext, window } from "vscode";
import { inputBoxCbMap, inputBoxMenuItems } from "./components/inputBox";
import { quickPickCbMap, quickPickMenuItems } from "./components/quickPicks";
import { treeViewCbMap, treeViewMenuItems } from "./components/treeView";
import { withProgressCbMap, withProgressMenuItems } from './components/withProgress'

export async function displayMenu(context: ExtensionContext) {
  const cbMaps = { ...quickPickCbMap, ...inputBoxCbMap, ...treeViewCbMap, ...withProgressCbMap };
  const menuItems = [...quickPickMenuItems, ...inputBoxMenuItems, ...treeViewMenuItems, ...withProgressMenuItems];
  const picked = await window.showQuickPick(menuItems);
  if (!picked) return;
  cbMaps[picked.description](context);
}
