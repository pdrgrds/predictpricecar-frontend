import { IServiceBlogResponse } from "./Service/IServiceBlog";
import { IServiceCategoryBlogResponse } from "./Service/IServiceCategoryBlog";
import { IServiceTagBlogResponse } from "./Service/IServiceTagBlog";

export interface IFormContact {
    nombres: string;
    apellidos: string;
    correo: string;
    phone: string;
}

export const initFormContact: IFormContact = {
    nombres: "",
    apellidos: "",
    correo: "",
    phone: ""
}

export interface IFormChangePassword {
    currentPassword: string;
    newPassword: string;
    confirmNewPassword: string;
}

export const initFormContactFormChangePassword: IFormChangePassword = {
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: ""
}

export interface IConfigModalPublish {
    show: boolean;
    form: Partial<IServiceBlogResponse>;
    options: {
        category: IServiceCategoryBlogResponse[];
        tag: IServiceTagBlogResponse[];
    }
}

export const initIConfigModalPublish: IConfigModalPublish = {
    show: false,
    form: {
        id: 0,
        prediction: 0
    },
    options: {
        category: [],
        tag: []
    }
}