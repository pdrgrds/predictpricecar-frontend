import { Repository } from "../Domain/Repository";
import { IFormContact } from "../Domain/Utils";

export class UseCaseUpdateContact {
    repository: Repository;
    constructor(_repository: Repository) {
        this.repository = _repository;
    }

    public async exec(params: IFormContact) {
        return await this.repository.updateContact(params);
    }
}