import { EntityVehiclePrediction } from "../../../shared/Domain/Catalog/EntityVehiclePrediction";

export interface Repository {
    getDetail(id: number): Promise<EntityVehiclePrediction>;
}