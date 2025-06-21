import { useFormik } from "formik";
import { IPropsScreen } from "../Domain/IPropsScreen";
import * as Yup from 'yup';
import { useState } from "react";
import { IConfigForm, initIConfigForm } from "../Domain/IConfigForm";
import { useNavigate } from "react-router-dom";
import { UseCaseLoadData } from "../Application/UseCaseLoadData";
import { RepositoryImpl } from "./RepositoryImpl";
import { initIServicePredictionRequest, IServicePredictionRequest } from "../Domain/Service/IServicePrediction";
import { UseCaseSavePrediction } from "../Application/UseCaseSavePrediction";
import { useDispatch, useSelector } from "react-redux";
import { addLoading, removeLoading } from "../../../shared/Infraestructure/SliceGeneric";
import { toast } from "react-toastify";
import { AdapterErrorMessage } from "../../../shared/Infraestructure/AdapterErrorMessage";
import { RootState } from "../../../shared/Infraestructure/AdapterStore";

export const Controller = (): IPropsScreen => {
    const [configForm, setConfigForm] = useState<IConfigForm>(initIConfigForm);
    const { user } = useSelector((state: RootState) => state.generic.user);

    const _repository = new RepositoryImpl();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const init = async () => {
        const result = await new UseCaseLoadData(_repository).exec();
        setConfigForm((prev) => ({
            ...prev,
            optionsInformation: result
        }))
    }

    const onChangeView = (key: IConfigForm['module']) => {
        setConfigForm((prev) => ({
            ...prev,
            module: key
        }))
    }

    const formHistorial = useFormik<IServicePredictionRequest>({
        initialValues: initIServicePredictionRequest,
        onSubmit: () => {},
        validationSchema: Yup.object({
            
        })
    })

    const onSubmit = async () => {
        const data = new FormData();
        Object.keys(formHistorial.values).forEach((key) => {
            data.append(key, (formHistorial.values as any)[key]);
        })

        data.append("user", `${1}`);

        try {
            dispatch(addLoading());
            const result = await new UseCaseSavePrediction(_repository).exec(data);
            navigate(`/form-detail/${result.detalle.id}`);
        } catch(error) {
            const message = AdapterErrorMessage.exec(error as any)
            toast.error(message, {
              position: "bottom-right",
              autoClose: 5000
            });
        } finally {
            dispatch(removeLoading());
        }
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