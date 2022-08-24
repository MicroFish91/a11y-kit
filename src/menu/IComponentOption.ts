import { ExtensionContext } from "vscode";

export interface IComponentOption {
    label: string;
    description: string;
    cb: (context: ExtensionContext) => any;
}