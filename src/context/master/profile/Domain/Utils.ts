import { IServiceBlogResponse } from "./Service/IServiceBlog";
import { EntityCategoryBlog } from "../../../shared/Domain/Catalog/EntityCategoryBlog";
import { EntityTagBlog } from "../../../shared/Domain/Catalog/EntityTagBlog";

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
        category: EntityCategoryBlog[];
        tag: EntityTagBlog[];
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