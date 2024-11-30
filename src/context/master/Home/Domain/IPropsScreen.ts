import { ConfigData } from "./Utils";

export interface IPropsScreen {
    data: ConfigData;
    init(): void;
    redirectPage(key: string): void;
}