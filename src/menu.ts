import { ExtensionContext, window } from "vscode";
import { ibComponent } from "./components/inputBox";
import { qpComponent } from "./components/quickPicks";
import { tvComponent } from "./components/treeView";
import { wpComponent } from "./components/withProgress";
import { Menu } from "./menu/Menu";

export async function displayMenu(context: ExtensionContext) {
  const a11yMenu = new Menu();
  a11yMenu.addComponents(qpComponent, ibComponent, tvComponent, wpComponent);
  
  const picked = await window.showQuickPick(a11yMenu.menuItems);
  if (!picked) return;
  a11yMenu.cbMaps[picked.description](context);
}
