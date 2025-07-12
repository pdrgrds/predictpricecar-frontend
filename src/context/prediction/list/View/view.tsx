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
import { CardCarItemComponent } from '../../../shared/Components/CardCar';
import { CardBlogComponents } from '../../../shared/Components/CardBlog';
import './style.scss';
import { IPropsScreen } from '../Domain/IPropsScreen';
import CompareFooter from './components/CompareFooter';
import { AdapterGenerico } from '../../../shared/Infraestructure/AdapterGenerico';

const { Sider, Content } = Layout;
const { Panel } = Collapse;
const { Option } = Select;

export const View: React.FC<IPropsScreen> = (props) => {
    const [form] = Form.useForm();

    const onSubmit = () => {
        props.onSubmitFilter(form.getFieldsValue());
    }

    const onReset = () => {
        form.resetFields();
        props.onSubmitFilter({});
    }

    return (
        <>
            <Layout style={{ minHeight: '100vh', padding: 24, marginTop: 36 }}>
                <Sider width={300} theme="light" style={{ padding: 20, borderRight: '1px solid #f0f0f0' }}>
                    <h3><FilterOutlined /> Filtros</h3>
                    <Form form={form} layout="vertical" onFinish={onSubmit}>
                        <Collapse defaultActiveKey={['1', '2']} ghost>
                            <Panel header="Marca" key="1">
                                <Form.Item name="brand">
                                    <Select placeholder="Selecciona una marca" allowClear>
                                        {props.optionsFilters.brand.map(brand => (
                                            <Option key={brand.id} value={brand.id}>
                                                {brand.name}
                                            </Option>
                                        ))}
                                    </Select>
                                </Form.Item>
                            </Panel>

                            <Panel header="Precio" key="2">
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                                    <span>{AdapterGenerico.formatCurrentMoney(props.optionsFilters.amount_price[0] ?? 0)}</span>
                                    <span>{AdapterGenerico.formatCurrentMoney(props.optionsFilters.amount_price[1] ?? 0)}</span>
                                </div>
                                <Form.Item name="precio">
                                    <Slider
                                        range
                                        min={props.optionsFilters.amount_price[0]}
                                        max={props.optionsFilters.amount_price[1]}
                                        step={1000}
                                        tooltip={{ formatter: (value) => `$${value}` }}
                                    />
                                </Form.Item>
                            </Panel>

                            <Panel header="Kilometraje" key="3">
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                                    <span>0 km</span>
                                    <span>{props.optionsFilters.mileage[1]} km</span>
                                </div>
                                <Form.Item name="mileage">
                                    <Slider
                                        range
                                        min={0}
                                        max={props.optionsFilters.mileage[1]}
                                        step={1000}
                                        tooltip={{ formatter: (value) => `${value} km` }}
                                    />
                                </Form.Item>
                            </Panel>

                            <Panel header="Año" key="4">
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                                    <span>{props.optionsFilters.year_vehicle[0]}</span>
                                    <span>{props.optionsFilters.year_vehicle[1]}</span>
                                </div>
                                <Form.Item name="anio">
                                    <Slider
                                        range
                                        min={props.optionsFilters.year_vehicle[0]}
                                        max={props.optionsFilters.year_vehicle[1]}
                                        tooltip={{ formatter: (value) => `${value}` }}
                                    />
                                </Form.Item>
                            </Panel>

                            <Panel header="Combustible" key="5">
                                <Form.Item name="combustible">
                                    <Checkbox.Group options={props.optionsFilters.fuel_type.map(row => ({ label: row.name, value: row.id }))} />
                                </Form.Item>
                            </Panel>

                            <Panel header="Transmisión" key="6">
                                <Form.Item name="transmision">
                                    <Checkbox.Group options={props.optionsFilters.transmission_type.map(row => ({ label: row.name, value: row.id }))} />
                                </Form.Item>
                            </Panel>

                            <Panel header="Color" key="7">
                                <Form.Item name="color">
                                    <Select placeholder="Selecciona un color" allowClear>
                                        {props.optionsFilters.color.map(color => (
                                            <Option key={color.id} value={color.id}>
                                                {color.name}
                                            </Option>
                                        ))}
                                    </Select>
                                </Form.Item>
                            </Panel>

                        </Collapse>

                        <Divider />
                        <Row gutter={8}>
                            <Col span={12}>
                                <Button onClick={() => onReset()} block disabled={props.configCompare.active}>
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
                        props.list.map((row, index) =>
                            <CardCarItemComponent
                                {...row}
                                index={index}
                                activeCompare={props.configCompare.active}
                                arrSelect={props.configCompare.arrList}
                                onSelectCompare={props.onChangeItemCompare}
                            />
                        )
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
                        <CardBlogComponents />
                    </div>

                </div>
            </section>

            <CompareFooter count={props.configCompare.arrList.length} isVisible={props.configCompare.active} onCompare={props.onSubmitCompare} />
        </>
    );
};
