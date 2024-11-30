import { Repository } from "../Domain/Repository";

export class UseCaseForgotPassword {
    repository: Repository;
    constructor(_repository: Repository) {
        this.repository = _repository;
    }

    public async exec(email: string) {
        return await this.repository.postForgotPassword(email);
    }
}