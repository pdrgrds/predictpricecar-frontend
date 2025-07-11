import { IServiceBlogResponse } from "./Service/IServiceBlog";
import { IServiceCategoryBlogResponse } from "./Service/IServiceCategoryBlog";
import { IServicePredictionsByUser } from "./Service/IServicePredictionsByUser";
import { IServiceTagBlogResponse } from "./Service/IServiceTagBlog";
import { IServiceResponseUpdateContact } from "./Service/IServiceUpdateContact";
import { IServiceUpdatePassword } from "./Service/IServiceUpdatePassword";
import { IFormChangePassword, IFormContact } from "./Utils";

export interface Repository {
    updateContact(params: IFormContact): Promise<IServiceResponseUpdateContact>
    updatePassword(params: IFormChangePassword): Promise<IServiceUpdatePassword>;
    getPredictionsByUser(): Promise<IServicePredictionsByUser[]>;
    getBlogById(_id: string): Promise<IServiceBlogResponse>;
    getCategoryBlog(): Promise<IServiceCategoryBlogResponse[]>;
    getTagBlog(): Promise<IServiceTagBlogResponse[]>;
    saveBlog(params: FormData): Promise<IServiceTagBlogResponse[]>;
    editBlog(id: number, params: FormData): Promise<IServiceTagBlogResponse[]>;
}