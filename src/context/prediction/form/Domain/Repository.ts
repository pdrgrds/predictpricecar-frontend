import { IOptionsInformation } from "./IConfigForm";
import { IServicePredictResponse } from "./Service/IServicePrediction";

export interface Repository {
    loadData(): Promise<IOptionsInformation>;
    onSavePrediction(params: FormData): Promise<IServicePredictResponse>;
}