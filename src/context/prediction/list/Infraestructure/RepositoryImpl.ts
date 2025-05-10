import { Repository } from "../Domain/Repository";

export class RepositoryImpl implements Repository {

    public async loadData(): Promise<void> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 1000);
        });
    }

}