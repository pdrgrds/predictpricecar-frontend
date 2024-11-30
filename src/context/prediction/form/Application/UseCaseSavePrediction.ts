import { Repository } from "../Domain/Repository";

export class UseCaseSavePrediction {
    repository: Repository;
    constructor(_repository: Repository) {
        this.repository = _repository;
    }

    public async exec(params: FormData) {
        return await this.repository.onSavePrediction(params);
    }
}