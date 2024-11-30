import { EntityVehicleBrand } from "../../../shared/Domain/Catalog/EntityVehicleBrand";
import { EntityVehicleCondition } from "../../../shared/Domain/Catalog/EntityVehicleCondition";
import { EntityVehicleTransmissionType } from "../../../shared/Domain/Catalog/EntityVehicleFuelTransmissionType";
import { EntityVehicleFuelType } from "../../../shared/Domain/Catalog/EntityVehicleFuelType";
import { EntityVehicleTractionType } from "../../../shared/Domain/Catalog/EntityVehicleTractionType";

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
}

export const initIConfigForm: IConfigForm = {
    module: 'general',
    optionsInformation: {
        fuelTypes: [],
        tractionTypes: [],
        transmissionTypes: [],
        vehicleBrands: [],
        vehicleconditions: []
    }
}