import { EntityCardCarComponent } from "../../../shared/Domain/EntityCardCarComponent";
import { IServiceFilterRequest, IServiceFilterResponse } from "./Service/IServiceFilter";
import { EntityConfigCompare } from "./utils";

export interface IPropsScreen {
    init(): void;
    destroy(): void;

    configCompare: EntityConfigCompare;
    onChangeConfigCompare(params: Partial<EntityConfigCompare>): void;
    onChangeItemCompare: (id: number) => void;
    contextHolder: React.ReactElement<unknown, string | React.JSXElementConstructor<unknown>>;
    onSubmitCompare: () => void;
    optionsFilters: IServiceFilterResponse;

    onSubmitFilter: (params: IServiceFilterRequest) => Promise<void>;
    list: EntityCardCarComponent[]
}