import { AdapterService } from "../../../shared/Infraestructure/AdapterService";
import { Repository } from "../Domain/Repository";
import { IServiceBlogResponse } from "../Domain/Service/IServiceBlog";
import { IServiceCategoryBlogResponse } from "../Domain/Service/IServiceCategoryBlog";
import { IServicePredictionsByUser } from "../Domain/Service/IServicePredictionsByUser";
import { IServiceTagBlogResponse } from "../Domain/Service/IServiceTagBlog";
import { IServiceResponseUpdateContact } from "../Domain/Service/IServiceUpdateContact";
import { IServiceUpdatePassword } from "../Domain/Service/IServiceUpdatePassword";
import { IFormChangePassword, IFormContact } from "../Domain/Utils";

export class RepositoryImpl implements Repository {
    service: AdapterService;

    constructor() {
        this.service = new AdapterService();
    }

    public async editBlog(id: number, params: FormData): Promise<IServiceTagBlogResponse[]> {
        const response = await this.service.exec<IServiceCategoryBlogResponse[]>('PUT', `/blog/update/${id}/`, params, "Bearer");
        if (!response) throw Error('Ocurrió un error al guardar');
        return response;
    }

    public async saveBlog(params: FormData): Promise<IServiceTagBlogResponse[]> {
        const response = await this.service.exec<IServiceCategoryBlogResponse[]>('POST', '/blog/create/', params, "Bearer");
        if (!response) throw Error('Ocurrió un error al guardar');
        return response;
    }

    public async getCategoryBlog(): Promise<IServiceCategoryBlogResponse[]> {
        const response = await this.service.exec<IServiceCategoryBlogResponse[]>('GET', '/blog/categories/', {}, "NoAuth");
        if (!response) throw Error('Ocurrió un error');
        return response;
    }

    public async getTagBlog(): Promise<IServiceTagBlogResponse[]> {
        const response = await this.service.exec<IServiceTagBlogResponse[]>('GET', '/blog/tags/', {}, "NoAuth");
        if (!response) throw Error('Ocurrió un error');
        return response;
    }

    public async getBlogById(id: string): Promise<IServiceBlogResponse> {
        const response = await this.service.exec<IServiceBlogResponse>('GET', `/blog/get/${id}/`, {}, "Bearer");
        if (!response) throw Error('Ocurrió un error');
        const getFile = await this.service.exec<File>('GET', response.cover_image!, undefined, 'NoAuth', { responseType: "blob" }, "file").catch(() => null)
        if (getFile) response.cover_image = new File([getFile], response.cover_image!.split('/').pop() ?? 'default.jpg', { type: getFile.type || "image/jpeg" }) as unknown as string;
        return response;
    }

    public async getPredictionsByUser(): Promise<IServicePredictionsByUser[]> {
        const response = await this.service.exec<IServicePredictionsByUser[]>('GET', '/predict/my-predictions/', {}, "Bearer");
        if (!response) throw Error('Ocurrió un error');
        return response;
    }

    public async updatePassword(params: IFormChangePassword): Promise<IServiceUpdatePassword> {
        const response = await this.service.exec<IServiceUpdatePassword>('PUT', '/auth/change-password/', params, "Bearer");
        if (!response) throw Error('Ocurrió un error al verificar su credenciales');
        return response;
    }

    public async updateContact(params: IFormContact): Promise<IServiceResponseUpdateContact> {
        const response = await this.service.exec<IServiceResponseUpdateContact>('PUT', '/auth/update-profile/', params, "Bearer");
        if (!response) throw Error('Ocurrió un error al actualizar su credenciales');
        return response;
    }

    public async onSubmitSaveBlog(params: FormData) {
        const response = await this.service.exec<IServiceBlogResponse>('POST', '/blog/create/', params, 'NoAuth');
        if (!response) throw Error('Ocurrió un error al guardar');
        return response;
    }
}