import { EntityCardCarComponent } from "../../../shared/Domain/EntityCardCarComponent";
import { AdapterGenerico } from "../../../shared/Infraestructure/AdapterGenerico";
import { AdapterService } from "../../../shared/Infraestructure/AdapterService";
import { Repository } from "../Domain/Repository";
import { IServiceFilterRequest, IServiceFilterResponse } from "../Domain/Service/IServiceFilter";

export class RepositoryImpl implements Repository {
    private service: AdapterService;
    
    constructor() {
        this.service = new AdapterService();
    }

    public async search(params: IServiceFilterRequest): Promise<EntityCardCarComponent[]> {
        const result = await this.service.exec<EntityCardCarComponent[]>('GET', `/predict/list-filtered/?${AdapterGenerico.buildUrlWithParams(params)}`, {}, "NoAuth").catch(() => []);
        if (!result) throw Error("Ocurrió un error al guardar");
        return result;
    }

    public async getFilters(): Promise<IServiceFilterResponse> {
        const result = await this.service.exec<IServiceFilterResponse>('GET', `/predict/filters/`, undefined, 'NoAuth');
        if (!result) throw Error("Ocurrió un error al guardar");
        return result;
    }
}