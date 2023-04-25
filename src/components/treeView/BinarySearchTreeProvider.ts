import {
  Event,
  EventEmitter,
  ProviderResult,
  ThemeIcon,
  TreeDataProvider,
  TreeItem,
  TreeItemCollapsibleState,
} from "vscode";

export class BinarySearchTreeProvider implements TreeDataProvider<BstNode> {
  private root: BstNode | null = null;

  public clearTree(): void {
    this.root = null;
  }

  public getTreeItem(element: BstNode): TreeItem {
    return element;
  }

  public getChildren(element?: BstNode): ProviderResult<BstNode[]> {
    if (!this.root) return Promise.resolve([]);
    if (!element) return Promise.resolve([this.root]);

    const children = [];
    if (element.left) children.push(element.left);
    if (element.right) children.push(element.right);

    return Promise.resolve(children);
  }

  public insertTreeItem(val: number): void {
    const newNode = new BstNode(val);

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

  private _onDidChangeTreeData: EventEmitter<BstNode | undefined | null | void> = new EventEmitter<BstNode | undefined | null | void>();
  readonly onDidChangeTreeData: Event<BstNode | undefined | null | void> = this._onDidChangeTreeData.event;
}

export class BstNode extends TreeItem {
  public left: BstNode | null;
  public right: BstNode | null;
  public val: number;
  public iconPath = new ThemeIcon("type-hierarchy");
  public contextValue = "bstNode";

  public constructor(val: number) {
    super(`${val}`, TreeItemCollapsibleState.Expanded);
    this.description = `${val} description`;
    this.tooltip = `${val} tooltip`;
    this.left = null;
    this.right = null;
    this.val = val;
  }
}
