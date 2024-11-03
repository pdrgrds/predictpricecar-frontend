import { InputComponent } from '../../../shared/Components/Input';
import { IPropsScreen } from '../Domain/IPropsScreen';
import './style.css';

export const View = (props: IPropsScreen) => {
    return (
        <div className="login-container">
            <div className="login-form">
                <h2>CARS PREDICT ML</h2>
                <form onSubmit={props.formRegister.handleSubmit}>

                    <InputComponent
                        form={props.formRegister}
                        label='Correo electrónico'
                        name='correo'
                        type='email'
                    />

                    <InputComponent
                        form={props.formRegister}
                        label='Nombres'
                        name='nombres'
                    />

                    <InputComponent
                        form={props.formRegister}
                        label='Apellidos'
                        name='apellidos'
                    />

                    <InputComponent
                        form={props.formRegister}
                        label='Teléfono'
                        name='telefono'
                    />

                    <InputComponent
                        form={props.formRegister}
                        label='Contraseña'
                        name='password'
                    />

                    <InputComponent
                        form={props.formRegister}
                        label='Confirmar contraseña'
                        name='confirmPassword'
                    />

                    <button type="submit" disabled={props.formRegister.isSubmitting} className="login-button">
                        Registrar
                    </button>
                    <a href="/login" className="forgot-password">¿Ya tiene una cuenta? clickea aquí</a>
                </form>
            </div>
        </div>
    )
}