import { AdapterGenerico } from "../../../shared/Infraestructure/AdapterGenerico";
import { IPropsScreen } from "../Domain/IPropsScreen";
import { useNavigate } from "react-router-dom";

export const Controller = (): IPropsScreen => {
    const navigate = useNavigate();

    const init = () => {
        AdapterGenerico.scrollToTop();
    }

    const redirectPage = (url: string) => {
        navigate(url)
    }

    return ({
        init,
        redirectPage
    })
}