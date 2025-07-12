import { EntityBlogList, EntityRequestEntityBlogList } from "../../../shared/Domain/Catalog/EntityBlogList";
import { EntityCategoryBlog } from "../../../shared/Domain/Catalog/EntityCategoryBlog";
import { EntityTagBlog } from "../../../shared/Domain/Catalog/EntityTagBlog";

export interface Repository {
    getCategoryBlog(): Promise<EntityCategoryBlog[]>;
    getTagBlog(): Promise<EntityTagBlog[]>;
    getBlog(params: EntityRequestEntityBlogList): Promise<EntityBlogList[]>;
}