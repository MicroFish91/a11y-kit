import { window } from "vscode";

export async function showInformationMessage() {
  await window.showInformationMessage("Information message...", "Yes", "No");
}

export async function showWarningMessage() {
  await window.showWarningMessage("Warning message...", "Ok");
}

export async function showErrorMessage() {
  await window.showErrorMessage("Error message...", "Ok");
}