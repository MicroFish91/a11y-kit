import {
  QuickInputButton,
  QuickPick,
  QuickPickItem,
  QuickPickItemKind,
  ThemeIcon,
  window
} from "vscode";
import { CustomQuickPick } from "./CustomQuickPick";

export async function createQuickPicksSingle() {
  const quickPick: QuickPick<QuickPickItem> = window.createQuickPick();

  // https://code.visualstudio.com/api/references/icons-in-labels#icon-listing
  const quickPickBtns: QuickInputButton[][] = [
    [
      { iconPath: new ThemeIcon("git-merge"), tooltip: "Quick Pick Item One - Icon Tooltip" },
    ],
    [
      { iconPath: new ThemeIcon("git-merge"), tooltip: "Quick Pick Item Three - Icon Tooltip" },
    ],
    [
      { iconPath: new ThemeIcon("git-merge"), tooltip: "Quick Pick Item Two - Icon Tooltip" },
      { iconPath: new ThemeIcon("git-merge"), tooltip: "Quick Pick Item Two - Icon Tooltip" },
    ],
  ];

  quickPick.value = "";
  quickPick.placeholder = "Quick Pick Placeholder";
  quickPick.matchOnDescription = true;
  quickPick.matchOnDetail = true;
  quickPick.keepScrollPosition = false;
  quickPick.canSelectMany = false;
  quickPick.items = [
    new CustomQuickPick("Quick Pick Item One Default", QuickPickItemKind.Default, quickPickBtns[0]),
    new CustomQuickPick("Quick Pick Item Two Separator", QuickPickItemKind.Separator, quickPickBtns[1]),
    new CustomQuickPick("Quick Pick Item Three Default", QuickPickItemKind.Default, quickPickBtns[2]),
  ];
  quickPick.buttons = [{ iconPath: new ThemeIcon("git-merge"), tooltip: "Quick Pick - Toolbar Icon" }];
  quickPick.onDidHide(() => quickPick.dispose());
  quickPick.onDidChangeSelection((eventSelection) => {
    if (eventSelection[0]) {
      console.log(`You chose: ${eventSelection[0].label}`);
    }
  });
  quickPick.onDidAccept(() => quickPick.hide())
  quickPick.show();
}

export async function createQuickPicksMany() {
  const quickPick: QuickPick<QuickPickItem> = window.createQuickPick();

  // https://code.visualstudio.com/api/references/icons-in-labels#icon-listing
  const quickPickBtns: QuickInputButton[][] = [
    [
      { iconPath: new ThemeIcon("git-merge"), tooltip: "Quick Pick Item One - Icon Tooltip" },
    ],
    [
      { iconPath: new ThemeIcon("git-merge"), tooltip: "Quick Pick Item Three - Icon Tooltip" },
    ],
    [
      { iconPath: new ThemeIcon("git-merge"), tooltip: "Quick Pick Item Two - Icon Tooltip" },
      { iconPath: new ThemeIcon("git-merge"), tooltip: "Quick Pick Item Two - Icon Tooltip" },
    ],
  ];

  quickPick.value = "";
  quickPick.placeholder = "Quick Pick Placeholder";
  quickPick.matchOnDescription = true;
  quickPick.matchOnDetail = true;
  quickPick.keepScrollPosition = false;
  quickPick.canSelectMany = true;
  quickPick.items = [
    new CustomQuickPick("Quick Pick Item One Default", QuickPickItemKind.Default, quickPickBtns[0]),
    new CustomQuickPick("Quick Pick Item Two Separator", QuickPickItemKind.Separator, quickPickBtns[1]),
    new CustomQuickPick("Quick Pick Item Three Default", QuickPickItemKind.Default, quickPickBtns[2]),
  ];
  quickPick.buttons = [{ iconPath: new ThemeIcon("git-merge"), tooltip: "Quick Pick - Toolbar Icon" }];
  quickPick.onDidHide(() => quickPick.dispose());
  quickPick.onDidChangeSelection((eventSelection) => {
    if (eventSelection[0]) {
      console.log(`You chose: ${eventSelection[0].label}`);
    }
  });
  quickPick.onDidAccept(() => quickPick.hide())
  quickPick.show();
}
