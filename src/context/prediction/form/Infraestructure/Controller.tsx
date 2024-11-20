import { useFormik } from "formik";
import { IPropsScreen } from "../Domain/IPropsScreen";
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup';

export const Controller = (): IPropsScreen => {
    const navigate = useNavigate();

    const init = () => {
    }

    const formHistorial = useFormik<any>({
        initialValues: {},
        onSubmit: () => {},
        validationSchema: Yup.object({

        })
    })

    return ({
        init,
        formHistorial,
        formEstado: formHistorial,
        formGeneral: formHistorial
    })
}