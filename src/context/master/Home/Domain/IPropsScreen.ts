import { ConfigData } from "./Utils";

export interface IPropsScreen {
    data: ConfigData;
    init(): void;
}