import { InputComponent } from '../../../shared/Components/Input';
import { IPropsScreen } from '../Domain/IPropsScreen';
import './style.css';

export const View = (props: IPropsScreen) => {
    return (
        <div className="login-container">
            <div className="login-form">
                <h2>RM Autos</h2>
                <form onSubmit={props.formForgotPassword.handleSubmit}>
                    <InputComponent
                        form={props.formForgotPassword}
                        label='Correo electrónico'
                        name='correo'
                        icon='fa-solid fa-envelope'
                    />

                    <button type="submit" disabled={props.formForgotPassword.isSubmitting} className="login-button">
                        Enviar
                    </button>
                    <a href="/login" className="forgot-password"> &larr; Regresar</a>
                </form>
            </div>
        </div>
    )
}