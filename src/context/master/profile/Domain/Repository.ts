import { IServiceBlogResponse } from "./Service/IServiceBlog";
import { EntityCategoryBlog } from "../../../shared/Domain/Catalog/EntityCategoryBlog";
import { IServicePredictionsByUser } from "./Service/IServicePredictionsByUser";
import { EntityTagBlog } from "../../../shared/Domain/Catalog/EntityTagBlog";
import { IServiceResponseUpdateContact } from "./Service/IServiceUpdateContact";
import { IServiceUpdatePassword } from "./Service/IServiceUpdatePassword";
import { IFormChangePassword, IFormContact } from "./Utils";

export interface Repository {
    updateContact(params: IFormContact): Promise<IServiceResponseUpdateContact>
    updatePassword(params: IFormChangePassword): Promise<IServiceUpdatePassword>;
    getPredictionsByUser(): Promise<IServicePredictionsByUser[]>;
    getBlogById(_id: string): Promise<IServiceBlogResponse>;
    getCategoryBlog(): Promise<EntityCategoryBlog[]>;
    getTagBlog(): Promise<EntityTagBlog[]>;
    saveBlog(params: FormData): Promise<EntityTagBlog[]>;
    editBlog(id: number, params: FormData): Promise<EntityTagBlog[]>;
}