import React, { useEffect, useState } from 'react';

import { BreadcrumbComponent } from '../../../shared/Components/Breadcrumb';
import { CardBlogComponents } from '../../../shared/Components/CardBlog';
import './style.scss';
import { IPropsScreen } from '../Domain/IPropsScreen';
import { Layout } from 'antd';
import VehicleComparison from './components/VehicleComparison';
import { AdapterService } from '../../../shared/Infraestructure/AdapterService';
import { EntityVehiclePrediction } from '../../../shared/Domain/Catalog/EntityVehiclePrediction';
const { Sider } = Layout;

export const View: React.FC<IPropsScreen> = () => {
    const [vehicle, setVehicle] = useState<EntityVehiclePrediction[]>([])

    const getData = async () => {
        const params = new URLSearchParams(window.location.search);
        const data = params.get("compare")?.split(',') ?? [];
        try {
            const service = new AdapterService();
            const resultVehicle1 = await service.exec<EntityVehiclePrediction>('GET', `/predict/historial/${data[0]}/`, undefined, 'Bearer');
            const resultVehicle2 = await service.exec<EntityVehiclePrediction>('GET', `/predict/historial/${data[1]}/`, undefined, 'Bearer');
            setVehicle([resultVehicle1, resultVehicle2]);
        } catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getData();
    }, [])

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
                    { vehicle[0] && vehicle[1] && <VehicleComparison vehicle1={vehicle[0]} vehicle2={vehicle[1]} /> }
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
