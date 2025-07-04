import { AdapterService } from "../../../shared/Infraestructure/AdapterService";
import { Repository } from "../Domain/Repository";
import { IServiceRegisterRequest, IServiceRegisterResponse } from "../Domain/Service/IServiceRegister";

export class RepositoryImpl implements Repository {
    service: AdapterService;

    constructor() {
        this.service = new AdapterService();
    }

    public async postRegister(params: IServiceRegisterRequest): Promise<IServiceRegisterResponse> {
        const result = await this.service.exec<IServiceRegisterResponse>('POST', '/auth/register/', params);
        if (!result) throw Error("Ocurrió un error insperado")
        return result;
    }
}