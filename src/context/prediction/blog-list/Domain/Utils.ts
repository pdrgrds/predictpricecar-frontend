import { EntityCategoryBlog } from "../../../shared/Domain/Catalog/EntityCategoryBlog";
import { EntityTagBlog } from "../../../shared/Domain/Catalog/EntityTagBlog";

export interface EntityLoadData {
    category: EntityCategoryBlog[];
    tag: EntityTagBlog[];
    result: any[];
}