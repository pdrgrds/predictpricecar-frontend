import { InputComponent } from '../../../shared/Components/Input';
import { IPropsScreen } from '../Domain/IPropsScreen';
import './style.css';

export const View = (props: IPropsScreen) => {
    return (
        <div className="login-container">
            <div className="login-form">
                <h2>CARS PREDICT ML</h2>
                <form onSubmit={props.formLogin.handleSubmit}>
                    <InputComponent
                        form={props.formLogin}
                        label='Usuario'
                        name='username'
                        icon='fa-solid fa-user'
                    />

                    <InputComponent
                        form={props.formLogin}
                        label='Contraseña'
                        name='password'
                        type='password'
                        icon='fa-solid fa-key'
                    />

                    <button type="submit" disabled={props.formLogin.isSubmitting} className="login-button">
                        Iniciar sesión
                    </button>
                    <a href="/forgot-password" className="forgot-password">¿Olvidó su contraseña?</a>
                    <button type="button" className="register-button" onClick={props.redirectRegister} >Registrar</button>
                </form>
            </div>
        </div>
    )
}