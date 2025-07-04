import { AdapterService } from "../../../shared/Infraestructure/AdapterService";
import { Repository } from "../Domain/Repository";
import { IServiceLoginRequest, IServiceLoginrResponse } from "../Domain/Service/IServicelogin";

export class RepositoryImpl implements Repository {
    service: AdapterService;

    constructor() {
        this.service = new AdapterService();
    }

    public async login(params: IServiceLoginRequest): Promise<IServiceLoginrResponse> {
        const response = await this.service.exec<IServiceLoginrResponse>('POST', '/auth/login/', params);
        if (!response) throw Error('Ocurrió un error al verificar su credenciales');
        return response;
    }
}