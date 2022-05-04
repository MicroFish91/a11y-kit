import { ExtensionContext } from "vscode";

export function createCbMapper(optionsList: OptionsList[]) {
  return optionsList.reduce(
    (
      acc: Record<string, (context: ExtensionContext) => any>,
      { description, cb }: OptionsList
    ) => {
      acc[description] = cb;
      return acc;
    },
    {}
  );
}

export function createMenuItems(optionsList: OptionsList[]) {
  return optionsList.map(({ label, description }: OptionsList) => {
    return { label, description };
  });
}

export type OptionsList = {
  label: string;
  description: string;
  cb: (context: ExtensionContext) => any;
}