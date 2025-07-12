import { SelectComponent } from '../../../shared/Components/select';
import { IPropsScreen } from '../Domain/IPropsScreen';

import IconSedan from './../../../../assets/icons/car-type/sedan.svg'
import IconSuv from './../../../../assets/icons/car-type/suv.svg'
import IconCoupe from './../../../../assets/icons/car-type/coupe.svg'
import IconConvertible from './../../../../assets/icons/car-type/convertible.svg'
import IconHatchback from './../../../../assets/icons/car-type/hatchback.svg'
import IconHybrid from './../../../../assets/icons/car-type/hybrid.svg'

import IconElectricCar from './../../../../assets/icons/electric-car.svg'
import IconElectricCar2 from './../../../../assets/icons/electric-car2.svg'

import IconDescriptionF1 from './../../../../assets/icons/f1-description.svg'
import IconDescriptionF2 from './../../../../assets/icons/f2-description.svg'
import IconDescriptionF3 from './../../../../assets/icons/f3-description.svg'
import IconDescriptionF4 from './../../../../assets/icons/f4-description.svg'

import './style.scss';
import { CardBlogComponents } from '../../../shared/Components/CardBlog';
import { FooterComponent } from '../../../shared/Components/Footer';
import { HeaderComponent } from '../../../shared/Components/Header';
import { Link } from 'react-router-dom';
import { ListEvaluationSection } from '../../../shared/Components/Section/ListEvaluation';

export const View = (props: IPropsScreen) => {
    return (
        <div className="home-container">

            { /* 1 SECTION */ }
            <section className='main-section'>
                <div className='container-main-section'>
                    <HeaderComponent redirectPage={props.redirectPage} />

                    <div className='filter-home'>
                        <div>
                            <p>Predicción Online. Evalúa tu vehículo rápido. <span onClick={() => props.redirectPage('form-prediction')} className='link-form'>Ver más</span></p>
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

            { /* 2 SECTION */ }
            <ListEvaluationSection list={props.data.listEvaluation}/>

            { /* 3 SECTION */ }
            <section className='helped-section'>
                <div className='container-helped-section'>
                    <div className='group-info-helped'>
                        <h3>¿Estas buscando <br/> un vehículo?</h3>
                        <p>Nos comprometemos a brindarles a nuestros clientes un servicio excepcional.</p>
                        <Link to={"/prediction/list"}> Empezar <i className='fa-solid fa-up-right-from-square' /></Link>
                        <img src={IconElectricCar}  height={110} width={110}/>
                    </div>

                    <div className='group-info-helped group-info-helped-2'>
                        <h3>¿Quieres vender <br/> tu vehículo?</h3>
                        <p>Nos comprometemos a brindarles a nuestros clientes un servicio excepcional.</p>
                        <Link to="/form-prediction">Empezar <i className='fa-solid fa-up-right-from-square' /></Link>
                        <img src={IconElectricCar2}  height={110} width={110}/>
                    </div>
                </div>
            </section>

            {/* 4 SECTION */}
            <section className='description-section'>
                <div className='container-description-section'>
                    <div className='group-description title-description-section'>
                        <h3>Estamos ENORMEMENTE<br/> comprometidos con lo que te importa</h3>
                    </div>

                    <div className='group-description list-description'>
                        <div className='item-description'>
                            <img src={IconDescriptionF1} height={60} width={60}/>
                            <p>Ofertas especiales </p>
                            <span>Precios justos por la autoevaluación de los vehículos.
                            </span>
                        </div>

                        <div className='item-description'>
                            <img src={IconDescriptionF2} height={60} width={60}/>
                            <p>Concesionario de confianza</p>
                            <span>Llevamos +4 años comprometidos con nuestro trabajo de calidad</span>
                        </div>

                        <div className='item-description'>
                            <img src={IconDescriptionF3} height={60} width={60}/>
                            <p>Precios transparentes</p>
                            <span>Evalua y obtén un precio justo por tu vehículo</span>
                        </div>

                        <div className='item-description'>
                            <img src={IconDescriptionF4} height={60} width={60}/>
                            <p>Servicio de calidad</p>
                            <span>Por cada trabjo que realizamos lo hacemos con el mayor compromiso de siempre</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5 SECTION */}
            <section className='products-premiun-section'>
                <div className='container-products-premiun-section'>

                    <div className='title-products-premiun'>
                        <h2>Explora nuestras marcas Premiun</h2>
                        <span onClick={() => props.redirectPage('/prediction/list')} className='view-all-evaluations'>ver todo <i className='fa-solid fa-up-right-from-square' /></span>
                    </div>

                    <div className='list-products-premiun'>
                        {
                            props.data.listBrandPremiun.map(row =>
                                <div className='item-product-premiun'>
                                    <img src={row.uri} height={100} width={100} />
                                    <p>{row.titulo}</p>
                                </div>
                            )
                        }
                    </div>

                </div>
            </section>

            {/* 6 SECTION */}
            <section className='aboutus-section'>
                <div className='container-aboutus-section'>
                    <div className='group-aboutus image-aboutus'/>

                    <div className='group-aboutus description-aboutus'>
                        <h3>Sobre nosotros</h3>
                        <p>Estamos liderando en el sector de venta de vehículos usados por +4 años juntos a nuestros colabodadores y poder ofreceles un servicio de calidad</p>
                        <button>Ver más <i className='fa-solid fa-up-right-from-square' /></button>
                    </div>
                </div>
            </section>

            {/* 7 SECTION */}
            <section className='blog-section'>
                <div className='container-blog-section'>
                    <div className='title-blog'>
                        <h2>Explora nuestro blog</h2>
                        <span className='view-all' onClick={() => props.redirectPage('/blog')}>ver todo <i className='fa-solid fa-up-right-from-square' /></span>
                    </div>

                    <div className='list-blog'>
                        <CardBlogComponents />
                    </div>

                </div>
            </section>

            {/* FOOTER */}
            <FooterComponent />
        </div>
    )
}