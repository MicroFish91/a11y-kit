import { ibComponent } from "../components/inputBox";
import { qpComponent } from "../components/quickPicks";
import { tvComponent } from "../components/treeView";
import { wpComponent } from "../components/withProgress";
import { Menu } from "./Menu";

export function createAndRegisterA11yMenu(): Menu {
  const a11yMenu = new Menu();
  a11yMenu.addComponents(qpComponent, ibComponent, tvComponent);
  return a11yMenu;
}

export function createAndRegisterSandboxMenu(): Menu {
  const sandboxMenu = new Menu();
  sandboxMenu.addComponents(qpComponent, ibComponent, tvComponent, wpComponent);
  return sandboxMenu;
}
