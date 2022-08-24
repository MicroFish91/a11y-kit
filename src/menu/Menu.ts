import { ExtensionContext, QuickPickItemKind, window } from "vscode";
import { CustomQuickPickItem } from "../components/quickPicks/CustomQuickPickItem";
import { IComponent } from "./IComponent";
import { IComponentOption } from "./IComponentOption";

export class Menu {
    private menuItems: Omit<IComponentOption, 'cb'>[] = [];
    private cbMaps: Record<string, IComponentOption['cb']> = {};

    public async display(context: ExtensionContext): Promise<void> {
        const picked = await window.showQuickPick(this.menuItems);
        if (!picked) return;
        this.cbMaps[picked.description](context);
    }

    public addComponents(...components: IComponent[]): void {
        if (!components?.length) throw new Error('Invalid format, could not add component.');

        for (const component of components) {
            this.menuItems.push(new CustomQuickPickItem(component.label, QuickPickItemKind.Separator));
            this.createMenuItems(component.optionsList);
            this.createCbMapper(component.optionsList);
        }
    }

    private createMenuItems(optionsList: IComponentOption[]): void {
        this.menuItems.push(...optionsList.map(({ label, description }: IComponentOption) => {
            return { label, description };
        }));
    }

    private createCbMapper(optionsList: IComponentOption[]): void {
        optionsList.forEach(({ description, cb }) => {
            this.cbMaps[description] = cb;
        });
    }
}