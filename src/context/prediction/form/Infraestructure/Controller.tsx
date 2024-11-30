import { useFormik } from "formik";
import { IPropsScreen } from "../Domain/IPropsScreen";
import * as Yup from 'yup';
import { useState } from "react";
import { IConfigForm, initIConfigForm } from "../Domain/IConfigForm";
import { useNavigate } from "react-router-dom";

export const Controller = (): IPropsScreen => {
    const navigate = useNavigate();
    const [configForm, setConfigForm] = useState<IConfigForm>(initIConfigForm);

    const init = () => {
    }

    const onChangeView = (key: IConfigForm['module']) => {
        setConfigForm((prev) => ({
            ...prev,
            module: key
        }))
    }

    const formHistorial = useFormik<any>({
        initialValues: {},
        onSubmit: () => {},
        validationSchema: Yup.object({

        })
    })

    const onSubmit = async () => {
        const uid = "23423do2-d2332d23-d2323432e-23d232324";
        navigate(`/form-detail/${uid}`)
    }

    return ({
        init,

        onChangeView,
        configForm,

        formHistorial,
        formEstado: formHistorial,
        formGeneral: formHistorial,
        onSubmit
    })
}