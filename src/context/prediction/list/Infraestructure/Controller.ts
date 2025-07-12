import { useState } from "react"
import { IPropsScreen } from "../Domain/IPropsScreen"
import { EntityConfigCompare, initEntityConfigCompare } from "../Domain/utils";
import { notification } from "antd";
import { useNavigate } from "react-router-dom";
import { AdapterGenerico } from "../../../shared/Infraestructure/AdapterGenerico";
import { initIServiceFilterResponse, IServiceFilterRequest, IServiceFilterResponse } from "../Domain/Service/IServiceFilter";
import { RepositoryImpl } from "./RepositoryImpl";
import { useDispatch } from "react-redux";
import { addLoading, removeLoading } from "../../../shared/Infraestructure/SliceGeneric";
import { EntityCardCarComponent } from "../../../shared/Domain/EntityCardCarComponent";

export const Controller = (): IPropsScreen => {
    const [configCompare, setConfigCompare] = useState<EntityConfigCompare>(initEntityConfigCompare);
    const [optionsFilters, setOptionsFilters] = useState<IServiceFilterResponse>(initIServiceFilterResponse);
    const [list, setList] = useState<EntityCardCarComponent[]>([]);
    const [api, contextHolder] = notification.useNotification();
    const repository = new RepositoryImpl();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const init = async () => {
        AdapterGenerico.scrollToTop();
        try {
            dispatch(addLoading());
            const response = await repository.getFilters();
            await onSubmitFilter({});
            setOptionsFilters(response);
        } catch(error) {
            console.log(error)
        } finally {
            dispatch(removeLoading());
        }
    }

    const destroy = () => {
    }

    const onSubmitFilter = async (params: IServiceFilterRequest) => {
        dispatch(addLoading());
        const result = await repository.search(params).catch(() => []);
        setList(result);
        dispatch(removeLoading());
    }

    // Config compare
    const onChangeConfigCompare = (params: Partial<EntityConfigCompare>) => {
        setConfigCompare((prev) => ({
            ...prev,
            ...params
        }))
    }

    const onChangeItemCompare = (id: number) => {
        const _arrList = configCompare.arrList;
        const positionId = _arrList.findIndex(row => row === id);

        if (positionId !== -1) {
            _arrList.splice(positionId, 1);
        } else if (_arrList.length < 2) {
            _arrList.push(id);
        } else {
            api.info({
                message: `Alerta!`,
                description:
                    'Solo se puede comparar entre 2 vehículos. Para agregar ese deberá deseleccionar uno de los otros vehículos.',
                placement: 'bottomRight',
            });
        }
        
        onChangeConfigCompare({ arrList: _arrList });
    }

    const onSubmitCompare = () => {
        navigate(`/prediction/compare-vehicle?compare=${configCompare.arrList.join(',')}`)
    }

    return ({
        init,
        destroy,
        contextHolder,

        configCompare,
        onChangeConfigCompare,
        onChangeItemCompare,
        onSubmitCompare,
        optionsFilters,
        onSubmitFilter,
        list
    })
}