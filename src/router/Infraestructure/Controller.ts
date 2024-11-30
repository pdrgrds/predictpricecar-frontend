import { useDispatch } from "react-redux";
import { EntityUsuario } from "../../context/shared/Domain/General/EntityUsuario";
import { AdapterLocalStorage } from "../../context/shared/Infraestructure/AdapterLocalStorage";
import { KEYS_APP } from "../../context/shared/keys";
import { IPropsScreen } from "../Domain/IPropsScreen";
import { changeUser } from "../../context/shared/Infraestructure/SliceGeneric";
import { useNavigate } from "react-router-dom";

export const Controller = (): IPropsScreen => {
    const dispatch = useDispatch();
    // const navigate = useNavigate();

    const initLoad = async () => {
        const [result] = AdapterLocalStorage.get(KEYS_APP.user);
        if (!result) {
            return;
        }

        const _user: EntityUsuario = JSON.parse(result);
        dispatch(changeUser(_user));
        
        const listRouteBlockLogin = ['/login', '/register', '/forgot-password'];
        if (listRouteBlockLogin.includes(window.location.pathname)) {
            // navigate('/');
        }
    }

    return ({
        initLoad
    })
}