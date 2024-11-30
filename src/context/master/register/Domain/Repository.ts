import { IServiceRegisterRequest, IServiceRegisterResponse } from "./Service/IServiceRegister";

export interface Repository {
    postRegister(params: IServiceRegisterRequest): Promise<IServiceRegisterResponse>;
}