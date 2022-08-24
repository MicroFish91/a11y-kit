import { ExtensionContext, QuickPickItemKind, window } from "vscode";
import { CustomQuickPickItem } from "../components/quickPicks/CustomQuickPickItem";
import { IComponent } from "./IComponent";
import { IOptionsList } from "./IOptionsList";

export class Menu {
    private menuItems: Omit<IOptionsList, 'cb'>[] = [];
    private cbMaps: Record<string, IOptionsList['cb']> = {};

    public constructor (private context: ExtensionContext) {}

    public async display(): Promise<void> {
        const picked = await window.showQuickPick(this.menuItems);
        if (!picked) return;
        this.cbMaps[picked.description](this.context);
    }

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