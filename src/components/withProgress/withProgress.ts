import { CancellationToken, Progress, ProgressLocation, ProgressOptions, window } from "vscode";

export async function withProgress(location: typeof ProgressLocation[keyof typeof ProgressLocation]) {
    const progressOptions: ProgressOptions = {
        cancellable: true, 
        location,
        title: "Progress Title"
    };

    await window.withProgress(progressOptions, 
        async (progress: NotificationProgress, cancellationToken: CancellationToken) => {
            await window.showInformationMessage("Step 1", "Ok");
            if(cancellationToken.isCancellationRequested) return;
            progress.report({ message: "Step 1 Complete", increment: 25 });

            await window.showInformationMessage("Step 2", "Ok");
            if(cancellationToken.isCancellationRequested) return; 
            progress.report({ message: "Step 2 Complete", increment: 50 });

            await window.showInformationMessage("Step 3", "Ok");
            if(cancellationToken.isCancellationRequested) return; 
            progress.report({ message: "Step 3 Complete", increment: 25 });

            await window.showInformationMessage("Ending");
        }
    );
}

export type NotificationProgress = Progress<{
    message?: string | undefined;
    increment?: number | undefined;
}>;