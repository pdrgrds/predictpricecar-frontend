import { FormikProps } from "formik";
import { IConfigModalPublish, IFormChangePassword, IFormContact } from "./Utils";
import { EntityUsuario } from "../../../shared/Domain/General/EntityUsuario";
import { IServicePredictionsByUser } from "./Service/IServicePredictionsByUser";
import { IServiceBlogRequest } from "./Service/IServiceBlog";

export interface IPropsScreen {
    init(): void;
    formContact: FormikProps<IFormContact>;
    dataTableVehicles: IServicePredictionsByUser[];
    formChangePassword: FormikProps<IFormChangePassword>;
    redirectPage(key: string): void;
    selectedTab: string;
    onChangeSelectTab: (newTab: string) => void;
    user: EntityUsuario["user"];
    onLogout: () => void;

    configPublish: IConfigModalPublish;
    openModalPublish: (data: IServicePredictionsByUser) => void;
    closeModalPublish: () => void
    onSubmitSaveBlog: (data: IServiceBlogRequest) => Promise<boolean>;
}