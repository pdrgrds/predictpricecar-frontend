import { AdapterService } from "../../../shared/Infraestructure/AdapterService";
import { Repository } from "../Domain/Repository";

export class RepositoryImpl implements Repository {
    service: AdapterService;

    constructor() {
        this.service = new AdapterService();
    }

    public async postForgotPassword(email: string): Promise<any> {
        const result = await this.service.exec('POST', '/accounts/forgot-password/', { email });
        if (!result) throw Error('Ocurrió un error inesperado');
        return result;
    }
}