import { QuickPickItemKind } from "vscode";
import { CustomQuickPickItem } from "../components/quickPicks/CustomQuickPickItem";
import { IComponent } from "./IComponent";
import { IOptionsList } from "./IOptionsList";

export class Menu {
    public menuItems: Omit<IOptionsList, 'cb'>[] = [];
    public cbMaps: Record<string, IOptionsList['cb']> = {};

    public addComponents(...components: IComponent[]): void {
        if (!components?.length) throw new Error('Invalid format, could not add component.');

        for (const component of components) {
            this.menuItems.push(new CustomQuickPickItem(component.label, QuickPickItemKind.Separator));
            this.createMenuItems(component.optionsList);
            this.createCbMapper(component.optionsList);
        }
    }

    private createMenuItems(optionsList: IOptionsList[]): void {
        this.menuItems.push(...optionsList.map(({ label, description }: IOptionsList) => {
            return { label, description };
        }));
    }

    private createCbMapper(optionsList: IOptionsList[]): void {
        optionsList.forEach(({ description, cb }) => {
            this.cbMaps[description] = cb;
        });
    }
}