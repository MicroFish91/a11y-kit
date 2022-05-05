import { commands, Disposable, ExtensionContext, window } from "vscode";
import { BinarySearchTreeProvider } from "./BinarySearchTreeProvider";

export async function initTreeView (context: ExtensionContext) {
  const bstProvider = new BinarySearchTreeProvider();
  window.registerTreeDataProvider("treeView", bstProvider);

  context.subscriptions.concat([
    commands.registerCommand("abkit.treeViewInsert", () => {
      const val = Math.floor(Math.random() * 30 + 1);
      bstProvider.insertTreeItem(val);
      bstProvider.refresh();
    }),
    commands.registerCommand("abkit.treeViewRefresh", () => {
      bstProvider.refresh();
    }),
    commands.registerCommand("abkit.treeViewEditEntry", () => {
      console.log("Editing entry.");
    }),
    commands.registerCommand("abkit.treeViewDeleteEntry", () => {
      console.log("Deleting entry.");
    }),
    commands.registerCommand("abkit.treeViewClear", () => {
      bstProvider.root = null;
      bstProvider.refresh();
    })
  ]);
}