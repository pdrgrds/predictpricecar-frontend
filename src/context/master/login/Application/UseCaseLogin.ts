import { Repository } from "../Domain/Repository";
import { IServiceLoginRequest } from "../Domain/Service/IServicelogin";

export class UseCaseLogin {
    repository: Repository;
    constructor(_repository: Repository) {
        this.repository = _repository;
    }

    public async exec(params: IServiceLoginRequest) {
        return await this.repository.login(params);
    }
}