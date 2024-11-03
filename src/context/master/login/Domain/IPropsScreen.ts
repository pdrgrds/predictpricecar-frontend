import { FormikProps } from "formik";
import { EntityFormLogin } from "./EntityFormLogin";

export interface IPropsScreen {
    formLogin: FormikProps<EntityFormLogin>;
    redirectRegister: () => void
}