import './style.scss'

interface IProps {
    uri: string;
    categoria: string;
    user: string;
    fecha: string;
    descripcion: string;
}

export const CardBlogComponents = (props: IProps) => {

    return (
        <div className='CardBlogComponents'>
            <div className='background-card'>
                <img src={props.uri} height={300} width={390} />
                <div className='categoria-blog'>{props.categoria}</div>
            </div>
            <p className='date-blog'>
                <span>{props.user}</span> - <span>{props.fecha}</span>
            </p>
            <p className='description-blog'>
                {props.descripcion}
            </p>
        </div>
    )
}