import { FormikProps } from "formik";

export interface IPropsScreen {
    init(): void;
    formGeneral: FormikProps<any>
    formHistorial: FormikProps<any>
    formEstado: FormikProps<any>
}