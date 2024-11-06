import './style.scss'

interface IProps {
    redirectPage(uri: string): void;
}

export const HeaderComponent = (props: IProps) => {
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
                <span className='button-login-home' onClick={() => props.redirectPage('login')}><i className='fa-regular fa-user' /> Iniciar sesión</span>
            </div>
        </div>
    )
}

export const HeaderComponentInternal = (props: IProps) => {
    return (
        <div className='HeaderComponentInternal'>
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
                    <span className='button-login-home' onClick={() => props.redirectPage('login')}><i className='fa-regular fa-user' /> Iniciar sesión</span>
                </div>
            </div>
        </div>
    )
}