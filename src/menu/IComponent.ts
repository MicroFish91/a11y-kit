import { ExtensionContext } from "vscode";

export interface Component {
    label: string;
    optionsList: ComponentOption[];
}

export interface ComponentOption {
    label: string;
    description: string;
    cb: (context: ExtensionContext) => any;
}