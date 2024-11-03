import { CardCarComponent } from '../../../shared/Components/CardCar';
import { SelectComponent } from '../../../shared/Components/select';
import { IPropsScreen } from '../Domain/IPropsScreen';
import IconSedan from './../../../../assets/icons/car-type/sedan.svg'
import IconSuv from './../../../../assets/icons/car-type/suv.svg'
import IconCoupe from './../../../../assets/icons/car-type/coupe.svg'
import IconConvertible from './../../../../assets/icons/car-type/convertible.svg'
import IconHatchback from './../../../../assets/icons/car-type/hatchback.svg'
import IconHybrid from './../../../../assets/icons/car-type/hybrid.svg'
import './style.scss';

export const View = (props: IPropsScreen) => {
    return (
        <div className="home-container">
            <section className='main-section'>
                <div className='container-main-section'>
                    <div className='nav-bar-home'>
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

                    <div className='filter-home'>
                        <div>
                            <p>Predicción Online. Evalúa tu vehículo rápido. <span className='link-form'>Ver más</span></p>
                            <h1>Rápido, Simple y Fácil</h1>
                            <div className='filters-type-car'>
                                <span className='item-selected '>Todos</span>
                                <span>Nuevos</span>
                                <span>Usados</span>
                            </div>

                            <div className='filter-inputs'>
                                <SelectComponent onChange={() => {}} options={[ { label: 'Marca 1', value: '1' } ]} placeholder='Marca' />
                                <SelectComponent onChange={() => {}} options={[ { label: 'Modelo 1', value: '1' } ]} placeholder='Modelo' />
                                <SelectComponent onChange={() => {}} options={[ { label: 'S/ 1', value: '1' } ]} placeholder='Precio' />
                                <button className='btn-search'><i className='fa-solid fa-search' style={{ fontSize: 16 }} /> Buscar </button>
                            </div>
                        </div>
                    </div>

                    <div className='filter-cars-home'>
                        <div> <img src={IconSuv} height={30} width={30} /> <span>SUV</span> </div>
                        <div> <img src={IconSedan} height={30} width={30} /> <span>Sedan</span> </div>
                        <div> <img src={IconHatchback} height={30} width={30} /> <span>Hatchback</span> </div>
                        <div> <img src={IconCoupe} height={30} width={30} /> <span>Coupe</span> </div>
                        <div> <img src={IconHybrid} height={30} width={30} /> <span>Hybrid</span> </div>
                        <div> <img src={IconConvertible} height={30} width={30} /> <span>Convertible</span> </div>
                    </div>
                </div>
            </section>

            <section className='evaluations-section'>
                <div className='container-evaluations-section'>
                    <div className='container-title-evaluations'>
                        <h2>Evaluaciones recientes</h2>
                        <span className='view-all-evaluations'>ver todo <i className='fa-solid fa-up-right-from-square' /></span>
                    </div>
                    <div className='list-evaluation'>
                        {
                            props.data.listEvaluation.map((row, index) =>
                                <CardCarComponent {...row} key={index} />
                            )
                        }
                    </div>

                </div>
            </section>
        </div>
    )
}