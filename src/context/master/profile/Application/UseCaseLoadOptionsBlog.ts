import { Repository } from "../Domain/Repository";

export class UseCaseLoadOptionsBlog {
    repository: Repository;
    constructor(_repository: Repository) {
        this.repository = _repository;
    }

    public async exec() {
        return await Promise.all([
            this.repository.getTagBlog(),
            this.repository.getCategoryBlog(),
        ])
    }
}