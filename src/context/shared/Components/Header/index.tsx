import { Link } from 'react-router-dom';
import './style.scss'
import { useSelector } from 'react-redux';
import { RootState } from '../../Infraestructure/AdapterStore';

interface IProps {
    redirectPage(uri: string): void;
}

export const HeaderComponent = (props: IProps) => {
    const { user } = useSelector((state: RootState) => state.generic.user)

    return (
        <div className='HeaderComponent'>
            <div className='menu-home'>
                <i className="fa-solid fa-bars" />
                <span>Menú</span>
            </div>
            <h3>RM Autos</h3>
            <div className='options-home'>
                <span>Inicio</span>
                <span>Lista</span>
                <span>Blog</span>
                <span>Página</span>
                <span>Contáctenos</span>
                {
                    user.is_staff ?
                    <a style={{ margin: 0 }} href={import.meta.env.VITE_ADMIN_URL} target='_blank'>Admin</a>
                    : null
                }
                {
                    !user.username ?
                    <span className='button-login-home' onClick={() => props.redirectPage('login')}><i className='fa-regular fa-user' /> Iniciar sesión</span>
                    :
                    <span className='button-login-home' onClick={() => props.redirectPage('profile')}><i className='fa-regular fa-user' /> Perfil</span> 
                }
            </div>
        </div>
    )
}

export const HeaderComponentInternal = (props: IProps) => {
  const { user } = useSelector((state: RootState) => state.generic.user);

  return (
    <header className="HeaderComponentInternal">
      <div className="HeaderComponent">
        <div className="logo-section">
          <i className="fa-solid fa-bars menu-icon" />
          <Link to="/" className="logo-text">RM Autos</Link>
        </div>
        <nav className="nav-links">
          <Link to="/">Inicio</Link>
          <Link to="/lista">Lista</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/pagina">Página</Link>
          <Link to="/contacto">Contáctenos</Link>
          {
            user.is_staff && (
              <a href={import.meta.env.VITE_ADMIN_URL} target="_blank" rel="noopener noreferrer">Admin</a>
            )
          }
          {
            user.username ? (
              <button className="auth-button" onClick={() => props.redirectPage('profile')}>
                <i className="fa-regular fa-user" /> Perfil
              </button>
            ) : (
              <button className="auth-button" onClick={() => props.redirectPage('login')}>
                <i className="fa-regular fa-user" /> Iniciar sesión
              </button>
            )
          }
        </nav>
      </div>
    </header>
  );
};