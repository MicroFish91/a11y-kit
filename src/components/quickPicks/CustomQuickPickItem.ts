import { QuickInputButton, QuickPickItem, QuickPickItemKind } from "vscode";

export class CustomQuickPickItem implements QuickPickItem {
  public label: string;
  public kind: QuickPickItemKind;
  public description: string;
  public detail: string;
  public picked: boolean = false;
  public alwaysShow: boolean = false;
  public buttons: QuickInputButton[];

  constructor(
    title: string,
    kind: QuickPickItemKind,
    buttons: QuickInputButton[]
  ) {
    this.label = `${title} - Label`;
    this.kind = kind;
    this.description = `${title} - Description`;
    this.detail = `${title} - Detail`;
    this.buttons = buttons;
  }
}
