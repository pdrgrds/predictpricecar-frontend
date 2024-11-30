import { Repository } from "../Domain/Repository";

export class UseCaseGetDetail {
    repository: Repository;
    constructor(_repository: Repository) {
        this.repository = _repository;
    }

    public async exec(id: any) {
        return await this.repository.getDetail(id);
    }
}