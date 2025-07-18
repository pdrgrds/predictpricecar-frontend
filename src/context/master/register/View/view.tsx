import { InputComponent } from '../../../shared/Components/Input';
import { IPropsScreen } from '../Domain/IPropsScreen';
import './style.css';

export const View = (props: IPropsScreen) => {
    return (
        <div className="login-container">
            <div className="login-form">
                <h2>RM Autos</h2>
                <form onSubmit={props.formRegister.handleSubmit}>

                    <InputComponent
                        form={props.formRegister}
                        label='Usuario'
                        name='usuario'
                        icon='fa-solid fa-user'
                    />

                    <InputComponent
                        form={props.formRegister}
                        label='Correo electrónico'
                        name='correo'
                        type='email'
                        icon='fa-solid fa-envelope'
                    />

                    <InputComponent
                        form={props.formRegister}
                        label='Nombres'
                        name='nombres'
                        icon='fa-solid fa-user'
                    />

                    <InputComponent
                        form={props.formRegister}
                        label='Apellidos'
                        name='apellidos'
                        icon='fa-solid fa-user'
                    />

                    <InputComponent
                        form={props.formRegister}
                        label='Teléfono'
                        name='phone'
                        icon='fa-solid fa-phone'
                    />

                    <InputComponent
                        form={props.formRegister}
                        label='Contraseña'
                        name='password'
                        type='password'
                        icon='fa-solid fa-key'
                    />

                    <InputComponent
                        form={props.formRegister}
                        label='Confirmar contraseña'
                        name='confirmPassword'
                        type='password'
                        icon='fa-solid fa-key'
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