import { useState } from "react"
import { IPropsScreen } from "../Domain/IPropsScreen"
import { EntityConfigCompare, initEntityConfigCompare } from "../Domain/utils";
import { notification } from "antd";
import { useNavigate } from "react-router-dom";

export const Controller = (): IPropsScreen => {
    const [configCompare, setConfigCompare] = useState<EntityConfigCompare>(initEntityConfigCompare);
    const [api, contextHolder] = notification.useNotification();
    const navigate = useNavigate();
    
    const init = () => {
    }

    const destroy = () => {
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
        onSubmitCompare
    })
}