import { ExtensionContext } from "vscode";

export interface IComponent {
    label: string;
    optionsList: IComponentOption[];
}

export interface IComponentOption {
    label: string;
    description: string;
    cb: (context: ExtensionContext) => any;
}