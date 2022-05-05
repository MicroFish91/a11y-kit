import {
  AccessibilityInformation,
  Event,
  EventEmitter,
  ProviderResult,
  ThemeIcon,
  TreeDataProvider,
  TreeItem,
  TreeItemCollapsibleState
} from "vscode";

export class BinarySearchTreeProvider implements TreeDataProvider<bstNode> {
  public root: bstNode | null;

  public constructor() {
    this.root = null;
  }

  public getTreeItem(element: bstNode): TreeItem {
    return element;
  }

  public getChildren(element?: bstNode): ProviderResult<bstNode[]> {
    if (!this.root) return Promise.resolve([]);
    if (!element) return Promise.resolve([this.root]);

    const children = [];
    if (element.left) children.push(element.left);
    if (element.right) children.push(element.right);

    return Promise.resolve(children);
  }

  public insertTreeItem(val: number): void {
    const newNode = new bstNode(val);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    let currentNode = this.root;

    while (true) {
      if (val === currentNode.val) break;

      if (val < currentNode.val) {
        if (!currentNode?.left) {
          currentNode.left = newNode;
          break;
        } else {
          currentNode = currentNode.left;
        }
      } else {
        if (!currentNode?.right) {
          currentNode.right = newNode;
          break;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
  }

  refresh(): void {
    this._onDidChangeTreeData.fire();
  }

  private _onDidChangeTreeData: EventEmitter<bstNode | undefined | null | void> = new EventEmitter<
    bstNode | undefined | null | void
  >();

  readonly onDidChangeTreeData: Event<bstNode | undefined | null | void> =
    this._onDidChangeTreeData.event;
}

export class bstNode extends TreeItem {
  public left: bstNode | null;
  public right: bstNode | null;
  public val: number;

  public constructor(val: number) {
    super(`${val}`, TreeItemCollapsibleState.Expanded);
    this.description = `${val} description`;
    this.tooltip = `${val} tooltip`;
    this.left = null;
    this.right = null;
    this.val = val;
  }

  iconPath = new ThemeIcon("type-hierarchy");
  contextValue = "bstNode";
  // command: Command
  accessibilityInformation?: AccessibilityInformation | undefined = {
    label: "Binary Tree Node Accessibility Label",
    // https://w3c.github.io/aria/#widget_roles
    role: "treeitem",
  };
}
