import { FormikProps } from "formik";
import { EntityFormForgotPassword } from "./EntityFormForgotPassword";

export interface IPropsScreen {
    formForgotPassword: FormikProps<EntityFormForgotPassword>;
    redirectLogin: () => void
}