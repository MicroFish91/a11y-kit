import { InputBoxOptions, window } from "vscode";

export async function showInputBox() {
  const options: InputBoxOptions = {
    title: "Title",
    prompt: "Enter a value.",
    validateInput: (value: string) => validation(value),
  };
  await window.showInputBox(options);
}

function validation(value: string): string | undefined {
  const regExp = /HelloWorld/i;
  if (regExp.test(value)) {
    return "Please enter a new value";
  }
  return undefined;
}
