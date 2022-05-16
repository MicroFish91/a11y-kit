import { InputBoxOptions, window } from "vscode";

export async function showInputBox() {
  const options: InputBoxOptions = {
    title: "Input Box Title",
    value: "",
    // valueSelection: [2, 4]
    prompt: "Input Box Prompt",
    placeHolder: "Input Box Placeholder",
    password: false,
    ignoreFocusOut: true,
    validateInput: (input: string) => {
      return input.length < 6 ? "Must be at least 6 characters." : null;
    },
  };
  const result = await window.showInputBox(options);
  console.log(`You wrote: ${result}`);
}

export async function showInputBoxWithPassword() {
  const options: InputBoxOptions = {
    title: "Input Box Title",
    value: "",
    // valueSelection: [2, 4]
    prompt: "Input Box Prompt",
    placeHolder: "Input Box Placeholder",
    password: true,
    ignoreFocusOut: true,
    validateInput: (input: string) => {
      return input.length < 6 ? "Must be at least 6 characters." : null;
    },
  };
  const result = await window.showInputBox(options);
  console.log(`You wrote: ${result}`);
}
