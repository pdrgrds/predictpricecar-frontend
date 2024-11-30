import { EntityVehicleBrand } from "../../../shared/Domain/Catalog/EntityVehicleBrand";
import { EntityVehicleCondition } from "../../../shared/Domain/Catalog/EntityVehicleCondition";
import { EntityVehicleTransmissionType } from "../../../shared/Domain/Catalog/EntityVehicleFuelTransmissionType";
import { EntityVehicleFuelType } from "../../../shared/Domain/Catalog/EntityVehicleFuelType";
import { EntityVehicleTractionType } from "../../../shared/Domain/Catalog/EntityVehicleTractionType";
import { AdapterService } from "../../../shared/Infraestructure/AdapterService";
import { IOptionsInformation } from "../Domain/IConfigForm";
import { Repository } from "../Domain/Repository";
import { IServicePredictResponse } from "../Domain/Service/IServicePrediction";

export class RepositoryImpl implements Repository {
    private service: AdapterService;

    constructor() {
        this.service = new AdapterService();
    }

    public async loadData(): Promise<IOptionsInformation> {
        const [vehicleBrands, fuelTypes, transmissionTypes, tractionTypes, vehicleconditions] = await Promise.all([
            this.service.exec<EntityVehicleBrand[]>('GET', '/core/vehicle-brands/', undefined, 'Bearer'),
            this.service.exec<EntityVehicleFuelType[]>('GET', '/core/fuel-types/', undefined, 'Bearer'),
            this.service.exec<EntityVehicleTransmissionType[]>('GET', '/core/transmission-types/', undefined, 'Bearer'),
            this.service.exec<EntityVehicleTractionType[]>('GET', '/core/traction-types/', undefined, 'Bearer'),
            this.service.exec<EntityVehicleCondition[]>('GET', '/core/vehicle-conditions/', undefined, 'Bearer'),

        ])

        return {
            fuelTypes: fuelTypes.map(row => ({ label: row.name, value: row.id, dataComplete: row })),
            tractionTypes: tractionTypes.map(row => ({ label: row.name, value: row.id, dataComplete: row })),
            transmissionTypes: transmissionTypes.map(row => ({ label: row.name, value: row.id, dataComplete: row })),
            vehicleBrands: vehicleBrands.map(row => ({ label: row.name, value: row.id, dataComplete: row })),
            vehicleconditions: vehicleconditions.map(row => ({ label: row.name, value: row.id, dataComplete: row })),
        }
    }

    public async onSavePrediction(params: FormData): Promise<IServicePredictResponse> {
        const result = await this.service.exec<IServicePredictResponse>('POST', '/evaluations/evaluations/', params, 'Bearer');
        if (!result) throw Error("Ocurrió un error al guardar");
        return result;
    }
}