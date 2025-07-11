import { Repository } from "../Domain/Repository";
import { IFormChangePassword } from "../Domain/Utils";

export class UseCaseUpdatePassword {
    repository: Repository;
    constructor(_repository: Repository) {
        this.repository = _repository;
    }

    public async exec(params: IFormChangePassword) {
        return await this.repository.updatePassword(params);
    }
}