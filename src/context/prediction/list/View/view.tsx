import React from 'react';
import {
    Layout,
    Form,
    Select,
    Slider,
    Checkbox,
    Divider,
    Button,
    Collapse,
    Row,
    Col
} from 'antd';
import {
    CarOutlined,
    FilterOutlined,
} from '@ant-design/icons';
import { CardCarComponent } from '../../../shared/Components/CardCar';
import { BreadcrumbComponent } from '../../../shared/Components/Breadcrumb';
import { CardBlogComponents } from '../../../shared/Components/CardBlog';
import './style.scss';
import { IPropsScreen } from '../Domain/IPropsScreen';
import CompareFooter from './components/CompareFooter';

const { Sider, Content } = Layout;
const { Panel } = Collapse;
const { Option } = Select;

const brands = ['Toyota', 'Honda', 'Ford', 'Chevrolet', 'BMW', 'Mercedes'];
const fuelTypes = ['Gasolina', 'Diésel', 'Eléctrico', 'Híbrido'];
const transmissions = ['Automática', 'Manual'];
const colors = ['Negro', 'Blanco', 'Rojo', 'Azul', 'Gris'];
const blogs = [
    { categoria: 'Accesorio', descripcion: '2024 BWM ALPINA XB7 con exclusivo detalles, extraordinario.', fecha: 'Octubre 22, 2024', uri: 'https://www.topgear.com/sites/default/files/images/cars-road-test/carousel/2021/03/9d0d163aa51ed59f0a737376c8f1ce68/alpinaxb7-13.jpg', user: 'Admin' },
    { categoria: 'Nuevo', descripcion: '2024 BWM ALPINA XB6 con exclusivo detalles, extraordinario.', fecha: 'Octubre 14, 2024', uri: 'https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2022/04/bmw-alpina-xb7-2675827.jpg?tf=1200x675', user: 'Admin' },
    { categoria: 'Piezas', descripcion: '2024 BWM ALPINA XB5 con exclusivo detalles, extraordinario.', fecha: 'Octubre 10, 2024', uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq6geY2op9taMcmUb4ObPEiNWuGEvQ7sIBuQ&s', user: 'Admin' }
]
const list = [
    {
        combustible: "Gasolina",
        descripcion: "2.0 TFSI quattro S tronic",
        kilometro: 30,
        link: "2",
        precio: 45000,
        tipo: "Automático",
        titulo: "Audi A4",
        uri: "https://cdn.pixabay.com/photo/2017/03/27/14/56/auto-2179220_640.jpg"
    },
    {
        combustible: "Diesel",
        descripcion: "1.6 BlueHDi Feel",
        kilometro: 40,
        link: "3",
        precio: 28000,
        tipo: "Manual",
        titulo: "Peugeot 308",
        uri: "https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg"
    },
    {
        combustible: "Híbrido",
        descripcion: "3.5 Hybrid LE sedan",
        kilometro: 15,
        link: "4",
        precio: 32000,
        tipo: "Automático",
        titulo: "Toyota Prius",
        uri: "https://www.privatecollectionmotors.com/imagetag/496/main/l/Used-2017-Mercedes-Benz-AMG-GT-S-AMG-GT-S-1689746732.jpg"
    },
    {
        combustible: "Eléctrico",
        descripcion: "Long Range Plus AWD",
        kilometro: 50,
        link: "5",
        precio: 65000,
        tipo: "Automático",
        titulo: "Tesla Model S",
        uri: "https://www.marinoperformancemotors.com/imagetag/13117/11/l/Used-2017-Mercedes-Benz-AMG-GT-S.jpg"
    },
    {
        combustible: "Gasolina",
        descripcion: "1.8 i-VTEC EX sedan",
        kilometro: 25,
        link: "6",
        precio: 23000,
        tipo: "Manual",
        titulo: "Honda Civic",
        uri: "https://cdn.pixabay.com/photo/2024/01/17/12/06/car-8514314_640.png"
    },
    {
        combustible: "Diesel",
        descripcion: "2.2 i-DTEC SE 4WD",
        kilometro: 10,
        link: "7",
        precio: 37000,
        tipo: "Automático",
        titulo: "Honda CR-V",
        uri: "https://thumbs.dreamstime.com/b/vintage-american-car-garage-selective-focus-vintage-american-car-garage-selective-focus-322997417.jpg"
    },
    {
        combustible: "Gasolina",
        descripcion: "5.0 V8 GT Fastback",
        kilometro: 15,
        link: "8",
        precio: 55000,
        tipo: "Manual",
        titulo: "Ford Mustang",
        uri: "https://live.dealer-asset.co/images/br1168/product/paintSwatch/vehicle/ford-negro.png?s=1024"
    },
    {
        combustible: "Híbrido",
        descripcion: "2.5 AWD Limited",
        kilometro: 20,
        link: "9",
        precio: 42000,
        tipo: "Automático",
        titulo: "Toyota RAV4 Hybrid",
        uri: "https://grupopanaseminuevos.com.pe/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-09-at-9.25.16-AM-7.jpeg"
    }
]

export const View: React.FC<IPropsScreen> = (props) => {
    const [form] = Form.useForm();

    const onSubmit = () => {
        console.log(form.getFieldsValue());
    }

    return (
        <>
            {/*<BreadcrumbComponent
                items={[
                    { label: 'Inicio', link: "/" },
                    { label: 'Lista' },
                ]}
            />*/}

            <Layout style={{ minHeight: '100vh', padding: 24, marginTop: 36 }}>
                <Sider width={300} theme="light" style={{ padding: 20, borderRight: '1px solid #f0f0f0' }}>
                    <h3><FilterOutlined /> Filtros</h3>
                    <Form form={form} layout="vertical" onFinish={onSubmit}>
                        <Collapse defaultActiveKey={['1', '2']} ghost>
                            <Panel header="Marca" key="1">
                                <Form.Item name="brand">
                                    <Select placeholder="Selecciona una marca" allowClear>
                                        {brands.map(brand => (
                                            <Option key={brand} value={brand}>
                                                {brand}
                                            </Option>
                                        ))}
                                    </Select>
                                </Form.Item>
                            </Panel>

                            <Panel header="Precio" key="2">
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                                    <span>$1,000</span>
                                    <span>$100,000</span>
                                </div>
                                <Form.Item name="price">
                                    <Slider
                                        range
                                        min={1000}
                                        max={100000}
                                        step={1000}
                                        tooltip={{ formatter: (value) => `$${value}` }}
                                    />
                                </Form.Item>
                            </Panel>

                            <Panel header="Kilometraje" key="3">
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                                    <span>0 km</span>
                                    <span>300,000 km</span>
                                </div>
                                <Form.Item name="mileage">
                                    <Slider
                                        range
                                        min={0}
                                        max={300000}
                                        step={1000}
                                        tooltip={{ formatter: (value) => `${value} km` }}
                                    />
                                </Form.Item>
                            </Panel>

                            <Panel header="Año" key="4">
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                                    <span>1990</span>
                                    <span>2025</span>
                                </div>
                                <Form.Item name="yearRange">
                                    <Slider
                                        range
                                        min={1990}
                                        max={2025}
                                        tooltip={{ formatter: (value) => `${value}` }}
                                    />
                                </Form.Item>
                            </Panel>

                            <Panel header="Combustible" key="5">
                                <Form.Item name="fuelType">
                                    <Checkbox.Group options={fuelTypes} />
                                </Form.Item>
                            </Panel>

                            <Panel header="Transmisión" key="6">
                                <Form.Item name="transmission">
                                    <Checkbox.Group options={transmissions} />
                                </Form.Item>
                            </Panel>

                            <Panel header="Color" key="7">
                                <Form.Item name="color">
                                    <Select placeholder="Selecciona un color" allowClear>
                                        {colors.map(color => (
                                            <Option key={color} value={color}>
                                                {color}
                                            </Option>
                                        ))}
                                    </Select>
                                </Form.Item>
                            </Panel>

                        </Collapse>

                        <Divider />
                        <Row gutter={8}>
                            <Col span={12}>
                                <Button onClick={() => form.resetFields()} block disabled={props.configCompare.active}>
                                    Resetear
                                </Button>
                            </Col>
                            <Col span={12}>
                                <Button onClick={() => onSubmit()} type="primary" htmlType="submit" block icon={<CarOutlined />} disabled={props.configCompare.active}>
                                    Buscar
                                </Button>
                            </Col>
                        </Row>

                        <Row>
                            <Col span={24}>
                            {
                                props.configCompare.active ?
                                    <Button type='dashed' onClick={() => props.onChangeConfigCompare({ active: false, arrList: [] })} block>
                                        Cancelar comparación
                                    </Button>
                                :
                                    <Button type='dashed' onClick={() => props.onChangeConfigCompare({ active: true })} block>
                                        Comparar
                                    </Button>
                            }
                            </Col>
                        </Row>
                    </Form>
                </Sider>

                <Content style={{ padding: '0 24px', display: 'flex', flexDirection: 'row', gap: 16, flexWrap: 'wrap' }}>
                    {
                        list.map((row, index) => (
                            <CardCarComponent
                                combustible={row.combustible}
                                descripcion={row.descripcion}
                                kilometro={row.kilometro}
                                link={row.link}
                                precio={row.precio}
                                tipo={row.tipo}
                                titulo={row.titulo}
                                uri={row.uri}
                                key={index}
                                activeCompare={props.configCompare.active}
                                isSelectCompare={props.configCompare.arrList.some((row) => row === index)}
                                onSelectCompare={() => props.onChangeItemCompare(index)}
                            />
                        ))
                    }
                </Content>
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

            <CompareFooter count={props.configCompare.arrList.length} isVisible={props.configCompare.active} onCompare={props.onSubmitCompare} />
        </>
    );
};
