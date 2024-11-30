import { Link } from 'react-router-dom';
import './style.scss'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Infraestructure/AdapterStore';
import { AdapterLocalStorage } from '../../Infraestructure/AdapterLocalStorage';
import { KEYS_APP } from '../../keys';
import { changeUser } from '../../Infraestructure/SliceGeneric';

interface IProps {
    redirectPage(uri: string): void;
}

export const HeaderComponent = (props: IProps) => {
    const { user } = useSelector((state: RootState) => state.generic.user)
    const dispatch = useDispatch();
    const logout = () => {
        AdapterLocalStorage.delete(KEYS_APP.user);
        dispatch(changeUser({ token: '', user: { email: '', first_name: '', id: 0, last_name: '', user_type: '', username: '' } }))
    }

    return (
        <div className='HeaderComponent'>
            <div className='menu-home'>
                <i className="fa-solid fa-bars" />
                <span>Menú</span>
            </div>
            <h3>CARS PREDICT ML</h3>
            <div className='options-home'>
                <span>Inicio</span>
                <span>Lista</span>
                <span>Blog</span>
                <span>Página</span>
                <span>Contáctenos</span>
                {
                    [2, null].includes(user.user_type) ?
                    <a style={{ margin: 0 }} href={import.meta.env.VITE_ADMIN_URL} target='_blank'>Admin</a>
                    : null
                }
                {
                    !user.username ?
                    <span className='button-login-home' onClick={() => props.redirectPage('login')}><i className='fa-regular fa-user' /> Iniciar sesión</span>
                    :
                    <span className='button-login-home' onClick={logout}><i className='fa-regular fa-user' /> Cerrar Sesión</span> 
                }
            </div>
        </div>
    )
}

export const HeaderComponentInternal = (props: IProps) => {
    const { user } = useSelector((state: RootState) => state.generic.user)
    const dispatch = useDispatch();
    const logout = () => {
        AdapterLocalStorage.delete(KEYS_APP.user);
        dispatch(changeUser({ token: '', user: { email: '', first_name: '', id: 0, last_name: '', user_type: '', username: '' } }))
    }

    return (
        <div className='HeaderComponentInternal'>
            <div className='HeaderComponent'>
                <div className='menu-home'>
                    <i className="fa-solid fa-bars" />
                    <span>Menú</span>
                </div>
                <Link to={"/"}>CARS PREDICT ML</Link>
                <div className='options-home'>
                    <span>Inicio</span>
                    <span>Lista</span>
                    <span>Blog</span>
                    <span>Página</span>
                    <span>Contáctenos</span>
                    {
                        [2, null].includes(user.user_type) ?
                            <a style={{ margin: 0 }} href={import.meta.env.VITE_ADMIN_URL} target='_blank'>Admin</a>
                        : null
                    }
                    {
                        !user.username ?
                            <span className='button-login-home' onClick={() => props.redirectPage('login')}><i className='fa-regular fa-user' /> Iniciar sesión</span>
                        :
                            <span className='button-login-home' onClick={logout}><i className='fa-regular fa-user' /> Cerrar Sesión</span> 
                    }
                </div>
            </div>
        </div>
    )
}