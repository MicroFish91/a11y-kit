import { ExtensionContext, QuickPickItem, QuickPickItemKind, window } from "vscode";
import { Component, ComponentOption } from "../components/IComponent";

type ComponentQuickPickItem = QuickPickItem & ComponentOption;

export class Menu {
    private menuItems: Omit<ComponentQuickPickItem, 'cb'>[] = [];
    private cbMaps: Record<string, ComponentOption['cb']> = {};

    public async display(context: ExtensionContext): Promise<void> {
        const picked = await window.showQuickPick(this.menuItems);
        if (!picked) return;
        this.cbMaps[picked.id](context);
    }

    public addComponents(...components: Component[]): void {
        if (!components?.length) throw new Error('Invalid format, could not add component.');

        for (const component of components) {
            this.menuItems.push({ id: `${component.label}-sep`, label: component.label, kind: QuickPickItemKind.Separator });
            this.createMenuItems(component.optionsList);
            this.createCbMapper(component.optionsList);
        }
    }

    private createMenuItems(optionsList: ComponentOption[]): void {
        this.menuItems.push(...optionsList.map(({ label, id }: ComponentOption) => {
            return { id, label };
        }));
    }

    private createCbMapper(optionsList: ComponentOption[]): void {
        optionsList.forEach(({ id, cb }) => {
            this.cbMaps[id] = cb;
        });
    }
}