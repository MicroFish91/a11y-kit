import { commands, TreeView, TreeViewOptions, window } from "vscode";
import { BinarySearchTreeProvider, BstNode } from "../components/treeView/treeViewComponent";

export function treeCommands() {
  const bstProvider = new BinarySearchTreeProvider();
  const treeViewOptions: TreeViewOptions<BstNode> = {
    treeDataProvider: bstProvider,
    showCollapseAll: true,
    canSelectMany: true,
  };
  const treeView: TreeView<BstNode> = window.createTreeView(
    "treeView",
    treeViewOptions
  );

  treeView.message = "Press the 'insert' icon to add nodes";
  treeView.title = "BST";
  treeView.description = "description";

  return [
    commands.registerCommand("a11y-kit.treeViewInsert", () => {
      const val = Math.floor(Math.random() * 30 + 1);
      bstProvider.insertTreeItem(val);
      bstProvider.refresh();
    }),
    commands.registerCommand("a11y-kit.treeViewRefresh", () => {
      bstProvider.refresh();
    }),
    commands.registerCommand("a11y-kit.treeViewEditEntry", () => {
      console.log("Editing entry.");
    }),
    commands.registerCommand("a11y-kit.treeViewDeleteEntry", () => {
      console.log("Deleting entry.");
    }),
    commands.registerCommand("a11y-kit.treeViewClear", () => {
      bstProvider.clearTree();
      bstProvider.refresh();
    }),
  ];
}
