import './style.scss';

export const FooterComponent = () => {
    return (
        <div className="FooterComponent">
            <div className='Container-FooterComponent'>
                <p>© {new Date().getFullYear()}. Todos los derechos reservados </p>
                <p>
                    <a href='#' target='_blank'>Términos y condiciones</a> - <a href='#' target='_blank'>Política de privacidad</a>
                </p>
            </div>
        </div>
    )
}