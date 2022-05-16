import { QuickInputButton, QuickPickItem, QuickPickItemKind } from "vscode";

// When you set kind to "separator", the only field that will be considered is "label"
export class CustomQuickPickItem implements QuickPickItem {
  public label: string;
  public kind: QuickPickItemKind;
  public description: string;
  public detail: string;
  public picked: boolean = false;
  public alwaysShow: boolean = false;

  constructor(
    label: string,
    kind: QuickPickItemKind,
    public buttons?: QuickInputButton[]
  ) {
    this.label = `${label}`;
    this.kind = kind;
    this.description = `${label} - Description`;
    this.detail = `${label} - Detail`;
  }
}
