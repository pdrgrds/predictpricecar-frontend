import { EntityVehiclePrediction } from "../../../shared/Domain/Catalog/EntityVehiclePrediction";
import { AdapterService } from "../../../shared/Infraestructure/AdapterService";
import { Repository } from "../Domain/Repository";

export class RepositoryImpl implements Repository {
    private service: AdapterService;

    constructor() {
        this.service = new AdapterService();
    }

    public async getDetail(id: number): Promise<EntityVehiclePrediction> {
        const result = await this.service.exec<EntityVehiclePrediction>('GET', `/evaluations/evaluations/${id}/`, undefined, 'Bearer');
        if (!result) throw Error("Ocurrió un error al guardar");
        return result;
    }
}