import { IPropsScreen } from "../Domain/IPropsScreen"
import { notification } from "antd";

export const Controller = (): IPropsScreen => {
    const [, contextHolder] = notification.useNotification();
    
    const init = () => {
    }

    const destroy = () => {
    }

    return ({
        init,
        destroy,
        contextHolder,
    })
}