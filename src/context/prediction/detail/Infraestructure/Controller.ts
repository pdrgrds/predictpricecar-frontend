import { IPropsScreen } from "../Domain/IPropsScreen";
import { useNavigate, useParams } from "react-router-dom";
import { RepositoryImpl } from "./RepositoryImpl";
import { UseCaseGetDetail } from "../Application/UseCaseGetDetail";
import { useDispatch } from "react-redux";
import { addLoading, removeLoading } from "../../../shared/Infraestructure/SliceGeneric";
import { toast } from "react-toastify";
import { AdapterErrorMessage } from "../../../shared/Infraestructure/AdapterErrorMessage";
import { useState } from "react";
import { EntityVehiclePrediction } from "../../../shared/Domain/Catalog/EntityVehiclePrediction";

export const Controller = (): IPropsScreen => {
    const _repository = new RepositoryImpl();
    const [detail, setDetail] = useState<EntityVehiclePrediction | null>(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();

    const init = async () => {
        try {
            dispatch(addLoading());
            const result = await new UseCaseGetDetail(_repository).exec(id);
            console.log(result);
            setDetail(result);
        } catch(error) {
            const message = AdapterErrorMessage.exec(error as any)
            toast.error(message, {
              position: "bottom-right",
              autoClose: 5000
            });
            redirectPage("/")
        } finally {
            dispatch(removeLoading());
        }
    }

    const redirectPage = (url: string) => {
        navigate(url)
    }

    return ({
        init,
        detail,
        redirectPage
    })
}