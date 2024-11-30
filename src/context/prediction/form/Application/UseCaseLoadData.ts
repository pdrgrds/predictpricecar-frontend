import { Repository } from "../Domain/Repository";

export class UseCaseLoadData {
    repository: Repository;
    constructor(_repository: Repository) {
        this.repository = _repository;
    }

    public async exec() {
        return await this.repository.loadData();
    }
}