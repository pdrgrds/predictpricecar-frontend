import { EntityVehiclePrediction } from "../../../shared/Domain/Catalog/EntityVehiclePrediction";

export interface IPropsScreen {
    init(): void;
    detail: EntityVehiclePrediction | null;
    redirectPage: (url: string) => void
    id: number
}