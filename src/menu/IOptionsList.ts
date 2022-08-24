import { ExtensionContext } from "vscode";

export interface IOptionsList {
    label: string;
    description: string;
    cb: (context: ExtensionContext) => any;
}