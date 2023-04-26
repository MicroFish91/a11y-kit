import { ExtensionContext, QuickPickItem } from "vscode";

export interface Component {
    label: string;
    optionsList: ComponentOption[];
}

export interface ComponentOption {
    id: string;
    label: string;
    cb: (context: ExtensionContext) => any;
}
