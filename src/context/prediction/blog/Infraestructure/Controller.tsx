import { IPropsScreen } from "../Domain/IPropsScreen";
import { useNavigate } from "react-router-dom";

export const Controller = (): IPropsScreen => {
    const navigate = useNavigate();

    const init = () => {
    }

    const redirectPage = (url: string) => {
        navigate(url)
    }

    return ({
        init,
        redirectPage
    })
}