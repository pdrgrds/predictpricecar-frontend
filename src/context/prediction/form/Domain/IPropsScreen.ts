import { FormikProps } from "formik";
import { IConfigForm } from "./IConfigForm";

export interface IPropsScreen {
    init(): void;

    onChangeView: (key: IConfigForm["module"]) => void
    configForm: IConfigForm;

    formGeneral: FormikProps<any>
    formHistorial: FormikProps<any>
    formEstado: FormikProps<any>
    onSubmit: () => Promise<void>;
}