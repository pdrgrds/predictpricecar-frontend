import { AdapterService } from "../../../shared/Infraestructure/AdapterService";
import { Repository } from "../Domain/Repository";
import { EntityCategoryBlog } from "../../../shared/Domain/Catalog/EntityCategoryBlog";
import { EntityTagBlog } from "../../../shared/Domain/Catalog/EntityTagBlog";
import { EntityBlogList, EntityRequestEntityBlogList } from "../../../shared/Domain/Catalog/EntityBlogList";
import { AdapterGenerico } from "../../../shared/Infraestructure/AdapterGenerico";

export class RepositoryImpl implements Repository {
    service: AdapterService;

    constructor() {
        this.service = new AdapterService();
    }

    public async getCategoryBlog(): Promise<EntityCategoryBlog[]> {
        const response = await this.service.exec<EntityCategoryBlog[]>('GET', '/blog/categories/', {}, "NoAuth");
        if (!response) throw Error('Ocurrió un error');
        return response;
    }

    public async getTagBlog(): Promise<EntityTagBlog[]> {
        const response = await this.service.exec<EntityTagBlog[]>('GET', '/blog/tags/', {}, "NoAuth");
        if (!response) throw Error('Ocurrió un error');
        return response;
    }

    public async getBlog(params: EntityRequestEntityBlogList): Promise<EntityBlogList[]> {
        const response = await this.service.exec<EntityBlogList[]>('GET', `/blog/list-filtered/?${AdapterGenerico.buildUrlWithParams(params)}`, {}, "NoAuth");
        if (!response) throw Error('Ocurrió un error');
        return response;
    }
}