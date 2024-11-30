import { Repository } from "../Domain/Repository";
import { IServiceRegisterRequest } from "../Domain/Service/IServiceRegister";

export class UseCaseRegister {
    repository: Repository;
    constructor(_repository: Repository) {
        this.repository = _repository;
    }

    public async exec(params: IServiceRegisterRequest) {
        return await this.repository.postRegister(params);
    }
}