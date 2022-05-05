import { InputBox, QuickInputButton, QuickInputButtons, ThemeIcon, window } from "vscode";

export async function createInputBox() {
  const inputBox: InputBox = window.createInputBox();
  const inputButton: QuickInputButton = {
    iconPath: new ThemeIcon("git-merge"),
    tooltip: "Input Button One Tooltip"
  };
  const backButton = QuickInputButtons.Back;

  inputBox.title = "Input Box Title";
  inputBox.enabled = true;
  inputBox.busy = false;
  inputBox.ignoreFocusOut = true;
  inputBox.value = "";
  inputBox.placeholder = "Input Box Placeholder";
  inputBox.password = false;
  inputBox.prompt = "Input Box Prompt";
  inputBox.buttons = [inputButton, backButton];
  inputBox.onDidTriggerButton((e: QuickInputButton) => {
    console.log(`Button triggered with tooltip: ${e.tooltip}`);
  });
  inputBox.onDidChangeValue((input: string) => {
    if(input.length < 6) {
      inputBox.validationMessage = "Must be at least 6 characters.";
    } else {
      inputBox.validationMessage = "";
    }
  });
  inputBox.onDidAccept((e: void) => {
    console.log(`You entered: ${inputBox.value}`);
    inputBox.hide();
  });
  inputBox.onDidHide(() => inputBox.dispose());
  inputBox.show();
}

export async function createInputBoxWithPassword() {
  const inputBox: InputBox = window.createInputBox();
  const inputButton: QuickInputButton = {
    iconPath: new ThemeIcon("git-merge"),
    tooltip: "Input Button One Tooltip"
  };
  const backButton = QuickInputButtons.Back;

  inputBox.title = "Input Box Title";
  inputBox.enabled = true;
  inputBox.busy = false;
  inputBox.ignoreFocusOut = true;
  inputBox.value = "";
  inputBox.placeholder = "Input Box Placeholder";
  inputBox.password = true;
  inputBox.prompt = "Input Box Prompt";
  inputBox.buttons = [inputButton, backButton];
  inputBox.onDidTriggerButton((e: QuickInputButton) => {
    console.log(`Button triggered with tooltip: ${e.tooltip}`);
  });
  inputBox.onDidChangeValue((input: string) => {
    if(input.length < 6) {
      inputBox.validationMessage = "Must be at least 6 characters.";
    } else {
      inputBox.validationMessage = "";
    }
  });
  inputBox.onDidAccept((e: void) => {
    console.log(`You entered: ${inputBox.value}`);
    inputBox.hide();
  });
  inputBox.onDidHide(() => inputBox.dispose());
  inputBox.show();
}