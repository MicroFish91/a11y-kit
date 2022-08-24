import { ExtensionContext } from "vscode";

export type IOptionsList = {
    label: string;
    description: string;
    cb: (context: ExtensionContext) => any;
}