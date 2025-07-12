import { EntityCardCarComponent } from "../../../shared/Domain/EntityCardCarComponent";
import { IServiceFilterRequest, IServiceFilterResponse } from "./Service/IServiceFilter";

export interface Repository {
    getFilters(): Promise<IServiceFilterResponse>;
    search(params: IServiceFilterRequest): Promise<EntityCardCarComponent[]>
}