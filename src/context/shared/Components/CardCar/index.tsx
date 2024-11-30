import './style.scss'
import IconKilometer from './../../../../assets/icons/icon-kilometer.svg'
import IconCombustible from './../../../../assets/icons/icon-combustible.svg'
import IconTypeCar from './../../../../assets/icons/icon-typecar.svg'
import { EntityCardCarComponent } from '../../Domain/EntityCardCarComponent'

interface IProps extends EntityCardCarComponent {}

export const CardCarComponent = (props: IProps) => {

    return (
        <div className="CardCarComponent">
            <div className='image-background' style={{ backgroundImage: `url(${props.uri})` }}>

            </div>

            <div className='detail-card'>
                <div className='title-card-car'>
                    <p>{props.titulo}</p>
                    <span>{props.descripcion}</span>
                </div>

                <div className='description-card-car'>
                    <div>
                        <img src={IconKilometer} width={20} height={20} />
                        <span>{props.kilometro} Millas</span>
                    </div>
                    <div>
                        <img src={IconCombustible} width={20} height={20} />
                        <span>{props.combustible}</span>
                    </div>
                    <div>
                        <img src={IconTypeCar} width={20} height={20} />
                        <span>{props.tipo}</span>
                    </div>
                </div>

                <div className='detail-card-car'>
                    <span className='price-card-car'>S/ {props.precio}</span>
                    <span className='link-detail-detail'>Ver detalles <i className='fa-solid fa-up-right-from-square' /></span>
                </div>
            </div>

        </div>
    )
}