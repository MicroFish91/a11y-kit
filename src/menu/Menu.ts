import { ExtensionContext, QuickPickItemKind, window } from "vscode";
import { CustomQuickPickItem } from "../components/quickPicks/CustomQuickPickItem";
import { IComponent, IComponentOption } from "./IComponent";

export class Menu {
    private _menuItems: Omit<IComponentOption, 'cb'>[] = [];
    private _cbMaps: Record<string, IComponentOption['cb']> = {};

    public async display(context: ExtensionContext): Promise<void> {
        const picked = await window.showQuickPick(this._menuItems);
        if (!picked) return;
        this._cbMaps[picked.description](context);
    }

    public addComponents(...components: IComponent[]): void {
        if (!components?.length) throw new Error('Invalid format, could not add component.');

        for (const component of components) {
            this._menuItems.push(new CustomQuickPickItem(component.label, QuickPickItemKind.Separator));
            this._createMenuItems(component.optionsList);
            this._createCbMapper(component.optionsList);
        }
    }

    private _createMenuItems(optionsList: IComponentOption[]): void {
        this._menuItems.push(...optionsList.map(({ label, description }: IComponentOption) => {
            return { label, description };
        }));
    }

    private _createCbMapper(optionsList: IComponentOption[]): void {
        optionsList.forEach(({ description, cb }) => {
            this._cbMaps[description] = cb;
        });
    }
}