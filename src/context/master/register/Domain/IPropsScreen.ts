import { FormikProps } from "formik";
import { EntityFormRegister } from "./EntityFormRegister";

export interface IPropsScreen {
    formRegister: FormikProps<EntityFormRegister>;
}