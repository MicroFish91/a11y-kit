import * as vscode from "vscode";

export function showQuickPicks() {
  const qp: vscode.QuickPickItem = {
    label: "$(git-merge) Merge Branch",
    description: "$(git-commit) 1 commit",
    detail: "$(diff-added) 3 $(diff-modified) 2",
  };

  vscode.window.showQuickPick([qp]);
  vscode.window.showInformationMessage(`Quick picks loaded.`);
}
