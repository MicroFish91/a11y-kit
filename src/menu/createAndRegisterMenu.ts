import { ibComponent } from "../components/inputBox/inputBoxComponent";
import { qpComponent } from "../components/quickPicks/quickPicksComponent";
import { smComponent } from "../components/showMessage/showMessageComponent";
import { tvComponent } from "../components/treeView/treeViewComponent";
import { wpComponent } from "../components/withProgress/withProgressComponent";
import { Menu } from "./Menu";

export function createAndRegisterA11yMenu(): Menu {
  const a11yMenu = new Menu();
  a11yMenu.addComponents(qpComponent, ibComponent, smComponent, tvComponent);
  return a11yMenu;
}

export function createAndRegisterSandboxMenu(): Menu {
  const sandboxMenu = new Menu();
  sandboxMenu.addComponents(qpComponent, ibComponent, smComponent, wpComponent, tvComponent);
  return sandboxMenu;
}
