import './style.scss'
import IconKilometer from './../../../../assets/icons/icon-kilometer.svg'
import IconCombustible from './../../../../assets/icons/icon-combustible.svg'
import IconTypeCar from './../../../../assets/icons/icon-typecar.svg'
import { Checkbox } from 'antd'
import { useEffect, useState } from 'react'
import { EntityCardCarComponent } from '../../Domain/EntityCardCarComponent'
import { useNavigate } from 'react-router-dom'
import { AdapterService } from '../../Infraestructure/AdapterService'
import { AdapterGenerico } from '../../Infraestructure/AdapterGenerico'

export const CardCarComponent = () => {
    const [list, setList] = useState<EntityCardCarComponent[]>([]);
    const navigate = useNavigate();

    const getPredictionList = async () => {
        try {
            const service = new AdapterService();
            const response = await service.exec<EntityCardCarComponent[]>('GET', `/predict/list-filtered/`, {}, "NoAuth").catch(() => []);
            setList(response.slice(0, 7))
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getPredictionList();
    }, [])

    return (
        list.map((row, index) =>
            <div
                className={`CardCarComponent ${props.activeCompare && 'CardCarComponent-activecompare'} ${props.arrSelect?.some(row => row === index) && 'CardCarComponent-select'}`}
                onClick={() => props.activeCompare && props.onSelectCompare?.(index)}
            >
                <div className='image-background' style={{ backgroundImage: `url(${row.front_image})` }}>
                    {
                        props.activeCompare &&
                        <div style={{ display: 'flex', width: '100%', justifyContent: 'end', padding: 10 }}>
                            <Checkbox checked={props.arrSelect?.some(row => row === index)}></Checkbox>
                        </div>
                    }
                </div>

                <div className='detail-card'>
                    <div className='title-card-car'>
                        <p>{row.brand} {row.version}</p>
                        <span>{row.model}</span>
                    </div>

                    <div className='description-card-car'>
                        <div>
                            <img src={IconKilometer} width={20} height={20} />
                            <span>{row.mileage / 1000} Millas</span>
                        </div>
                        <div>
                            <img src={IconCombustible} width={20} height={20} />
                            <span>{row.fuel_type}</span>
                        </div>
                        <div>
                            <img src={IconTypeCar} width={20} height={20} />
                            <span>{row.transmission_type}</span>
                        </div>
                    </div>

                    <div className='detail-card-car'>
                        <span className='price-card-car'>{AdapterGenerico.formatCurrentMoney(row.valued_amount)}</span>
                        {
                            !props.activeCompare &&
                            <span onClick={() => navigate(`/form-detail/${row.id}`)} className='link-detail-detail'>Ver detalles <i className='fa-solid fa-up-right-from-square' /></span>
                        }
                    </div>
                </div>

            </div>
        )
    )
}

interface IProps extends EntityCardCarComponent {
    activeCompare?: boolean;
    arrSelect?: number[];
    onSelectCompare?: (index: number) => void;
    index: number;
}

export const CardCarItemComponent = (props: IProps) => {
    const navigate = useNavigate();

    return (
        <div
            className={`CardCarComponent ${props.activeCompare && 'CardCarComponent-activecompare'} ${props.arrSelect?.some(row => row === props.index) && 'CardCarComponent-select'}`}
            onClick={() => props.activeCompare && props.onSelectCompare?.(props.index)}
        >
            <div className='image-background' style={{ backgroundImage: `url(${props.front_image})` }}>
                {
                    props.activeCompare &&
                    <div style={{ display: 'flex', width: '100%', justifyContent: 'end', padding: 10 }}>
                        <Checkbox checked={props.arrSelect?.some(row => row === props.index)}></Checkbox>
                    </div>
                }
            </div>

            <div className='detail-card'>
                <div className='title-card-car'>
                    <p>{props.brand} {props.version}</p>
                    <span>{props.model}</span>
                </div>

                <div className='description-card-car'>
                    <div>
                        <img src={IconKilometer} width={20} height={20} />
                        <span>{props.mileage / 1000} Millas</span>
                    </div>
                    <div>
                        <img src={IconCombustible} width={20} height={20} />
                        <span>{props.fuel_type}</span>
                    </div>
                    <div>
                        <img src={IconTypeCar} width={20} height={20} />
                        <span>{props.transmission_type}</span>
                    </div>
                </div>

                <div className='detail-card-car'>
                    <span className='price-card-car'>{AdapterGenerico.formatCurrentMoney(props.valued_amount)}</span>
                    {
                        !props.activeCompare &&
                        <span onClick={() => navigate(`/form-detail/${props.id}`)} className='link-detail-detail'>Ver detalles <i className='fa-solid fa-up-right-from-square' /></span>
                    }
                </div>
            </div>

        </div>
    )
}