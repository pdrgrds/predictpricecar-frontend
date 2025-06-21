import { EntityVehicleBrand } from "../../../shared/Domain/Catalog/EntityVehicleBrand";
import { EntityVehicleColor } from "../../../shared/Domain/Catalog/EntityVehicleColor";
import { EntityVehicleCondition } from "../../../shared/Domain/Catalog/EntityVehicleCondition";
import { EntityVehicleTransmissionType } from "../../../shared/Domain/Catalog/EntityVehicleFuelTransmissionType";
import { EntityVehicleFuelType } from "../../../shared/Domain/Catalog/EntityVehicleFuelType";
import { EntityVehicleModel } from "../../../shared/Domain/Catalog/EntityVehicleModel";
import { EntityVehicleTractionType } from "../../../shared/Domain/Catalog/EntityVehicleTractionType";
import { EntityVehicleType } from "../../../shared/Domain/Catalog/EntityVehicleType";
import { EntityVehicleVersion } from "../../../shared/Domain/Catalog/EntityVehicleVersion";
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
        const [vehicleBrands, vehicleModel, vehicleVersion, fuelTypes, transmissionTypes, tractionTypes, vehicleconditions, tipoVehiculo, colorVehicle] = await Promise.all([
            this.service.exec<EntityVehicleBrand[]>('GET', '/catalogos/marcas/', undefined, 'Bearer'),
            this.service.exec<EntityVehicleModel[]>('GET', '/catalogos/modelo/', undefined, 'Bearer'),
            this.service.exec<EntityVehicleVersion[]>('GET', '/catalogos/version/', undefined, 'Bearer'),
            this.service.exec<EntityVehicleFuelType[]>('GET', '/catalogos/combustibles/', undefined, 'Bearer'),
            this.service.exec<EntityVehicleTransmissionType[]>('GET', '/catalogos/transmisiones/', undefined, 'Bearer'),
            this.service.exec<EntityVehicleTractionType[]>('GET', '/catalogos/tracciones/', undefined, 'Bearer'),
            this.service.exec<EntityVehicleCondition[]>('GET', '/catalogos/condiciones/', undefined, 'Bearer'),
            this.service.exec<EntityVehicleType[]>('GET', '/catalogos/tipo-vehiculo/', undefined, 'Bearer'),
            this.service.exec<EntityVehicleColor[]>('GET', '/catalogos/color/', undefined, 'Bearer'),
        ])

        return {
            fuelTypes: fuelTypes.map(row => ({ label: row.name, value: row.id, dataComplete: row })),
            tractionTypes: tractionTypes.map(row => ({ label: row.name, value: row.id, dataComplete: row })),
            transmissionTypes: transmissionTypes.map(row => ({ label: row.name, value: row.id, dataComplete: row })),
            vehicleBrands: vehicleBrands.map(row => ({ label: row.name, value: row.id, dataComplete: row })),
            vehicleModel: vehicleModel.map(row => ({ label: row.name, value: row.id, dataComplete: row })),
            vehicleVersion: vehicleVersion.map(row => ({ label: row.name, value: row.id, dataComplete: row })),
            vehicleconditions: vehicleconditions.map(row => ({ label: row.name, value: row.id, dataComplete: row })),
            vehicleType: tipoVehiculo.map(row => ({ label: row.name, value: row.id, dataComplete: row })),
            color: colorVehicle.map(row => ({ label: row.name, value: row.id, dataComplete: row })),
        }
    }

    public async onSavePrediction(params: FormData): Promise<IServicePredictResponse> {
        const result = await this.service.exec<IServicePredictResponse>('POST', '/predict/predecir/', params, 'Bearer');
        if (!result) throw Error("Ocurrió un error al guardar");
        return result;
    }
}