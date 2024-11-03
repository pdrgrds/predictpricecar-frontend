import { SelectComponent } from '../../../shared/Components/select';
import { IPropsScreen } from '../Domain/IPropsScreen';
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
                            <span className='button-login-home'><i className='fa-regular fa-user' /> Iniciar sesión</span>
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
                        <span> <i className='fa-solid fa-car' /> SUV </span>
                        <span> <i className='fa-solid fa-car' /> Sedan </span>
                        <span> <i className='fa-solid fa-car' /> Hatchback </span>
                        <span> <i className='fa-solid fa-car' /> Coupe </span>
                        <span> <i className='fa-solid fa-car' /> Hybrid </span>
                        <span> <i className='fa-solid fa-car' /> Convertible </span>
                    </div>
                </div>
            </section>


        </div>
    )
}