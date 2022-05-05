import { QuickPickOptions, window } from "vscode";

export async function showQuickPicksSingle() {
  const options: QuickPickOptions = {
    title: "Quick Pick Placeholder Title",
    matchOnDescription: true,
    matchOnDetail: true,
    placeHolder: "Quick Pick Placeholder Text",
    ignoreFocusOut: true,
    canPickMany: false,
  };
  const result = await window.showQuickPick(
    ["Quick Pick One", "Quick Pick Two", "Quick Pick Three"],
    options
  );
  console.log(`Selected: ${result}`);
}

export async function showQuickPicksMany() {
  const options: QuickPickOptions = {
    title: "Quick Pick Placeholder Title",
    matchOnDescription: true,
    matchOnDetail: true,
    placeHolder: "Quick Pick Placeholder Text",
    ignoreFocusOut: true,
    canPickMany: true,
  };
  const result = await window.showQuickPick(
    ["Quick Pick One", "Quick Pick Two", "Quick Pick Three"],
    options
  );
  console.log(`Selected: ${result}`);
}
