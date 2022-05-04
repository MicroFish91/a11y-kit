import { QuickInputButton, QuickPick, QuickPickItem, QuickPickItemKind, ThemeIcon, window } from "vscode";
import { CustomQuickPick } from "./CustomQuickPick";

// <----------- Create Quick Picks - Single ---------------->
export async function createQuickPicksSingle() {
  const quickPick: QuickPick<QuickPickItem> = window.createQuickPick();

  // https://code.visualstudio.com/api/references/icons-in-labels#icon-listing
  const quickPickBtns: QuickInputButton[][] = [
    [
      { iconPath: new ThemeIcon("git-merge"), tooltip: "Quick Pick Item One - Icon Tooltip" },
    ],
    [
      { iconPath: new ThemeIcon("git-merge"), tooltip: "Quick Pick Item Two - Icon Tooltip" },
      { iconPath: new ThemeIcon("git-merge"), tooltip: "Quick Pick Item Two - Icon Tooltip" }
    ],
  ];

  quickPick.value = "Quick Pick";
  quickPick.placeholder = "Quick Pick Placeholder";
  quickPick.matchOnDescription = true;
  quickPick.matchOnDetail = true;
  quickPick.keepScrollPosition = false;
  quickPick.canSelectMany = false;
  quickPick.items = [
    new CustomQuickPick("Quick Pick Item One", QuickPickItemKind.Default, quickPickBtns[0]),
    new CustomQuickPick("Quick Pick Item Two", QuickPickItemKind.Default, quickPickBtns[1]),
  ];
  quickPick.buttons = [{ iconPath: new ThemeIcon("git-merge"), tooltip: "Quick Pick - Toolbar Icon" }];
  quickPick.onDidHide(() => quickPick.dispose());
  quickPick.onDidChangeSelection((eventSelection) => {
    if (eventSelection[0]) {
      window.showInformationMessage(`You chose: ${eventSelection[0].label}`);
    }
  });
  quickPick.show();
}
