import {
  QuickInputButton,
  QuickPick,
  QuickPickItem,
  QuickPickItemKind,
  ThemeIcon,
  window,
} from "vscode";
import { CustomQuickPickItem } from "./CustomQuickPickItem";

export function createQuickPicksSingle() {
  const quickPick: QuickPick<QuickPickItem> = window.createQuickPick();

  // https://code.visualstudio.com/api/references/icons-in-labels#icon-listing
  const quickPickBtns: QuickInputButton[][] = [
    [
      {
        iconPath: new ThemeIcon("git-merge"),
        tooltip: "Item One - Icon Tooltip",
      },
    ],
    [
      {
        iconPath: new ThemeIcon("git-merge"),
        tooltip: "Item Two - Icon Tooltip",
      },
    ],
    [
      {
        iconPath: new ThemeIcon("git-merge"),
        tooltip: "Item Three - Icon Tooltip",
      },
      {
        iconPath: new ThemeIcon("git-merge"),
        tooltip: "Item Three - Icon Tooltip",
      },
    ],
  ];

  quickPick.title = "Quick Pick Title";
  quickPick.value = "";
  quickPick.placeholder = "Quick Pick Placeholder";
  quickPick.matchOnDescription = true;
  quickPick.matchOnDetail = true;
  quickPick.keepScrollPosition = false;
  quickPick.canSelectMany = false;
  quickPick.items = [
    new CustomQuickPickItem(
      "$(git-merge) Item One",
      QuickPickItemKind.Default,
      quickPickBtns[0]
    ),
    new CustomQuickPickItem(
      "Item Two Separator",
      QuickPickItemKind.Separator,
      quickPickBtns[1]
    ),
    new CustomQuickPickItem(
      "Item Three",
      QuickPickItemKind.Default,
      quickPickBtns[2]
    ),
  ];
  quickPick.buttons = [
    {
      iconPath: new ThemeIcon("git-merge"),
      tooltip: "Quick Pick - Toolbar Icon",
    },
  ];
  quickPick.onDidHide(() => quickPick.dispose());
  quickPick.onDidChangeSelection((eventSelection) => {
    if (eventSelection[0]) {
      console.log(`You chose: ${eventSelection[0].label}`);
    }
  });
  quickPick.onDidAccept(() => quickPick.hide());
  quickPick.show();
}

export function createQuickPicksMany() {
  const quickPick: QuickPick<QuickPickItem> = window.createQuickPick();

  // https://code.visualstudio.com/api/references/icons-in-labels#icon-listing
  const quickPickBtns: QuickInputButton[][] = [
    [
      {
        iconPath: new ThemeIcon("git-merge"),
        tooltip: "Item One - Icon Tooltip",
      },
    ],
    [
      {
        iconPath: new ThemeIcon("git-merge"),
        tooltip: "Item Two - Icon Tooltip",
      },
    ],
    [
      {
        iconPath: new ThemeIcon("git-merge"),
        tooltip: "Item Three - Icon Tooltip",
      },
      {
        iconPath: new ThemeIcon("git-merge"),
        tooltip: "Item Three - Icon Tooltip",
      },
    ],
  ];

  quickPick.title = "Quick Pick Title";
  quickPick.value = "";
  quickPick.placeholder = "Quick Pick Placeholder";
  quickPick.matchOnDescription = true;
  quickPick.matchOnDetail = true;
  quickPick.keepScrollPosition = false;
  quickPick.canSelectMany = true;
  quickPick.items = [
    new CustomQuickPickItem(
      "$(git-merge) Item One",
      QuickPickItemKind.Default,
      quickPickBtns[0]
    ),
    new CustomQuickPickItem(
      "Item Two Separator",
      QuickPickItemKind.Separator,
      quickPickBtns[1]
    ),
    new CustomQuickPickItem(
      "Item Three",
      QuickPickItemKind.Default,
      quickPickBtns[2]
    ),
  ];
  quickPick.buttons = [
    {
      iconPath: new ThemeIcon("git-merge"),
      tooltip: "Quick Pick - Toolbar Icon",
    },
  ];
  quickPick.onDidHide(() => quickPick.dispose());
  quickPick.onDidChangeSelection((eventSelection) => {
    if (eventSelection[0]) {
      console.log(`You chose: ${eventSelection[0].label}`);
    }
  });
  quickPick.onDidAccept(() => quickPick.hide());
  quickPick.show();
}
