import { ExtensionContext, QuickPickItemKind, window } from "vscode";
import { CustomQuickPickItem } from "../components/quickPicks/CustomQuickPickItem";
import { Component, ComponentOption } from "./IComponent";

export class Menu {
    private menuItems: Omit<ComponentOption, 'cb'>[] = [];
    private cbMaps: Record<string, ComponentOption['cb']> = {};

    public async display(context: ExtensionContext): Promise<void> {
        const picked = await window.showQuickPick(this.menuItems);
        if (!picked) return;
        this.cbMaps[picked.description](context);
    }

    public addComponents(...components: Component[]): void {
        if (!components?.length) throw new Error('Invalid format, could not add component.');

        for (const component of components) {
            this.menuItems.push(new CustomQuickPickItem(component.label, QuickPickItemKind.Separator));
            this.createMenuItems(component.optionsList);
            this.createCbMapper(component.optionsList);
        }
    }

    private createMenuItems(optionsList: ComponentOption[]): void {
        this.menuItems.push(...optionsList.map(({ label, description }: ComponentOption) => {
            return { label, description };
        }));
    }

    private createCbMapper(optionsList: ComponentOption[]): void {
        optionsList.forEach(({ description, cb }) => {
            this.cbMaps[description] = cb;
        });
    }
}