import { IServiceLoginRequest, IServiceLoginrResponse } from "./Service/IServicelogin";

export interface Repository {
    login(params: IServiceLoginRequest): Promise<IServiceLoginrResponse>
}