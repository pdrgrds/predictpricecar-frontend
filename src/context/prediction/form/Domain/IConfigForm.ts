import { EntityVehicleBrand } from "../../../shared/Domain/Catalog/EntityVehicleBrand";
import { EntityVehicleColor } from "../../../shared/Domain/Catalog/EntityVehicleColor";
import { EntityVehicleCondition } from "../../../shared/Domain/Catalog/EntityVehicleCondition";
import { EntityVehicleTransmissionType } from "../../../shared/Domain/Catalog/EntityVehicleFuelTransmissionType";
import { EntityVehicleFuelType } from "../../../shared/Domain/Catalog/EntityVehicleFuelType";
import { EntityVehicleModel } from "../../../shared/Domain/Catalog/EntityVehicleModel";
import { EntityVehicleTractionType } from "../../../shared/Domain/Catalog/EntityVehicleTractionType";
import { EntityVehicleType } from "../../../shared/Domain/Catalog/EntityVehicleType";
import { EntityVehicleVersion } from "../../../shared/Domain/Catalog/EntityVehicleVersion";

export interface IConfigForm {
    module: 'general' | 'historial' | 'adiccional';
    optionsInformation: IOptionsInformation;
}

interface OptionsInformation<T> {
    label: string;
    value: any;
    dataComplete: T;
}

export interface IOptionsInformation {
    vehicleBrands: Array<OptionsInformation<EntityVehicleBrand>>,
    fuelTypes: Array<OptionsInformation<EntityVehicleFuelType>>,
    transmissionTypes: Array<OptionsInformation<EntityVehicleTransmissionType>>,
    tractionTypes: Array<OptionsInformation<EntityVehicleTractionType>>,
    vehicleconditions: Array<OptionsInformation<EntityVehicleCondition>>
    vehicleType: Array<OptionsInformation<EntityVehicleType>>;
    vehicleModel: Array<OptionsInformation<EntityVehicleModel>>;
    vehicleVersion: Array<OptionsInformation<EntityVehicleVersion>>;
    color: Array<OptionsInformation<EntityVehicleColor>>;
}

export const initIConfigForm: IConfigForm = {
    module: 'general',
    optionsInformation: {
        fuelTypes: [],
        tractionTypes: [],
        transmissionTypes: [],
        vehicleBrands: [],
        vehicleconditions: [],
        vehicleType: [],
        vehicleVersion: [],
        vehicleModel: [],
        color: [],
    }
}