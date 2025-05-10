import React from 'react';

import { BreadcrumbComponent } from '../../../shared/Components/Breadcrumb';
import { CardBlogComponents } from '../../../shared/Components/CardBlog';
import './style.scss';
import { IPropsScreen } from '../Domain/IPropsScreen';
import { Layout } from 'antd';
import VehicleComparison from './components/VehicleComparison';

const { Sider } = Layout;

const blogs = [
    { categoria: 'Accesorio', descripcion: '2024 BWM ALPINA XB7 con exclusivo detalles, extraordinario.', fecha: 'Octubre 22, 2024', uri: 'https://www.topgear.com/sites/default/files/images/cars-road-test/carousel/2021/03/9d0d163aa51ed59f0a737376c8f1ce68/alpinaxb7-13.jpg', user: 'Admin' },
    { categoria: 'Nuevo', descripcion: '2024 BWM ALPINA XB6 con exclusivo detalles, extraordinario.', fecha: 'Octubre 14, 2024', uri: 'https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2022/04/bmw-alpina-xb7-2675827.jpg?tf=1200x675', user: 'Admin' },
    { categoria: 'Piezas', descripcion: '2024 BWM ALPINA XB5 con exclusivo detalles, extraordinario.', fecha: 'Octubre 10, 2024', uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq6geY2op9taMcmUb4ObPEiNWuGEvQ7sIBuQ&s', user: 'Admin' }
];

const vehicle1 = {
  id: 1,
  name: 'Toyota Corolla',
  image: "https://cdn.pixabay.com/photo/2017/03/27/14/56/auto-2179220_640.jpg",
  price: 20000,
  features: {
    'Consumo de combustible (L/100km)': 6.5,
    'Emisiones de CO₂ (g/km)': 120,
    'Potencia (HP)': 132,
    'Aceleración 0-100 km/h (s)': 9.5,
  },
};

const vehicle2 = {
  id: 2,
  name: 'Honda Civic',
  image: "https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg",
  price: 22000,
  features: {
    'Consumo de combustible (L/100km)': 7.0,
    'Emisiones de CO₂ (g/km)': 125,
    'Potencia (HP)': 158,
    'Aceleración 0-100 km/h (s)': 8.2,
  },
};

export const View: React.FC<IPropsScreen> = () => {

    return (
        <>
            <BreadcrumbComponent
                items={[
                    { label: 'Inicio', link: "/" },
                    { label: 'Lista', link: `/prediction/list` },
                    { label: 'Comparar' },
                ]}
            />

            <Layout style={{ minHeight: '100vh', padding: 24, marginTop: 36 }}>
                <Sider width={'100%'} theme="light" style={{ padding: 20, borderRight: '1px solid #f0f0f0' }}>
                    <VehicleComparison vehicle1={vehicle1} vehicle2={vehicle2} />
                </Sider>
            </Layout>

            <section className='blog-section-list-prediction'>
                <div className='container-blog-section'>
                    <div className='title-blog'>
                        <h2>Explora nuestro blog</h2>
                        <span className='view-all'>ver todo <i className='fa-solid fa-up-right-from-square' /></span>
                    </div>

                    <div className='list-blog'>
                        {
                            blogs.map(row =>
                                <CardBlogComponents {...row} />
                            )
                        }
                    </div>

                </div>
            </section>
        </>
    );
};
