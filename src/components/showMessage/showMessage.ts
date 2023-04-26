import { window } from "vscode";

export async function showInformationMessage() {
  await window.showInformationMessage("Information message...");
}

export async function showInformationMessageWithButtons() {
  await window.showInformationMessage("Information message...", "Yes", "No");
}

export async function showWarningMessageWithButtons() {
  await window.showWarningMessage("Warning message...", "Yes", "No");
}

export async function showErrorMessageWithButtons() {
  await window.showErrorMessage("Error message...", "Yes", "No");
}