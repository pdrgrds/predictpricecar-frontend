import React from 'react';

import { BreadcrumbComponent } from '../../../shared/Components/Breadcrumb';
import { CardBlogComponents } from '../../../shared/Components/CardBlog';
import './style.scss';
import { IPropsScreen } from '../Domain/IPropsScreen';
import { Layout } from 'antd';
import VehicleComparison from './components/VehicleComparison';

const { Sider } = Layout;

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
                        <CardBlogComponents />
                    </div>

                </div>
            </section>
        </>
    );
};
