import { ExtensionContext, QuickPick, QuickPickItem, window } from "vscode";
import { QP_OPTIONS } from "./quickPicks";

export async function displayMenu(context: ExtensionContext) {
  const cbMap: Record<string, (context: ExtensionContext) => any> = {
    [`${QP_OPTIONS[`SQP_SINGLE`].description}`]: QP_OPTIONS[`SQP_SINGLE`].cb,
    [`${QP_OPTIONS[`SQP_MANY`].description}`]: QP_OPTIONS[`SQP_MANY`].cb,
    [`${QP_OPTIONS[`CQP_SINGLE`].description}`]: QP_OPTIONS[`CQP_SINGLE`].cb,
  };
  const quickPick: QuickPick<QuickPickItem> = window.createQuickPick();
  quickPick.items = [
    { label: QP_OPTIONS[`SQP_SINGLE`].label, description: QP_OPTIONS[`SQP_SINGLE`].description },
    { label: QP_OPTIONS[`SQP_MANY`].label, description: QP_OPTIONS[`SQP_MANY`].description },
    { label: QP_OPTIONS[`CQP_SINGLE`].label, description: QP_OPTIONS[`CQP_SINGLE`].description }
  ];
  quickPick.onDidChangeSelection((eventSelection) => {
    if (eventSelection[0]?.description) {
      cbMap[eventSelection[0].description](context).catch(console.error);
    }
  });
  quickPick.onDidHide(() => quickPick.dispose());
  quickPick.show();
}

