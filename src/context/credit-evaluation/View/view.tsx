import { Card, Form, InputNumber, Slider, Button, Typography, Row, Col, Divider, Checkbox } from "antd";
import { PhoneOutlined, DollarOutlined, CalendarOutlined, SmileOutlined } from "@ant-design/icons";
import { useState } from "react";
import { IPropsScreen } from "../Domain/IPropsScreen";
import ImageMain from './../../../assets/image/BackgroundLogin.png';
import "./view.scss";

const { Title, Text } = Typography;

export const View = (props: IPropsScreen) => {
    console.log(props);
    const [form] = Form.useForm();
    const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null);

    const onFinish = (values: any) => {
        const { amount, months, interestRate } = values;
        const monthlyRate = interestRate / 100 / 12;
        const payment =
            (amount * monthlyRate) /
            (1 - Math.pow(1 + monthlyRate, -months));
        setMonthlyPayment(payment);
    }

    return (
        <div className="View-Credit-Evaluation">
            <div className="Cover-Image">
                <img src={ImageMain} className="ImageBackground" />
                <div className="OverlayText">
                    <Title level={1} className="title">Tu nuevo auto te espera</Title>
                    <p>
                        Calcula tu cuota mensual y solicita contacto si estás interesado. ¡100% seguro y rápido!
                    </p>
                </div>
            </div>
            <Card>
                <Title level={1} className="Title-Main">Simulador de Crédito Vehicular</Title>
                <Text>
                    Calcula tu cuota mensual y solicita contacto si estás interesado. ¡100% seguro y rápido!
                </Text>

                <Row gutter={[24, 24]} >
                    <Col xs={24} md={14}>
                        <Form
                            form={form}
                            layout="vertical"
                            onFinish={onFinish}
                            initialValues={{ interestRate: 12, months: 36 }}
                        >
                            <Form.Item
                                name="amount"
                                label="Monto del préstamo (S/.)"
                                rules={[{ required: true, message: "Ingrese el monto" }]}
                            >
                                <InputNumber
                                    className="w-full"
                                    min={1000}
                                    max={200000}
                                    prefix={<DollarOutlined />}
                                />
                            </Form.Item>

                            <Form.Item name="months" label="Plazo (en meses)">
                                <Slider min={6} max={84} step={6} marks={{ 12: "12", 36: "36", 60: "60", 84: "84" }} />
                            </Form.Item>

                            <Form.Item
                                name="interestRate"
                                label="Tasa de interés anual (%)"
                                tooltip="Tasa referencial bancaria"
                            >
                                <InputNumber className="w-full" min={5} max={40} suffix="%" />
                            </Form.Item>

                            <Form.Item name="contact" valuePropName="checked">
                                <Checkbox style={{ color: 'black' }}>
                                    Deseo ser contactado si mi simulación es exitosa
                                </Checkbox>
                            </Form.Item>

                            <Button type="primary" htmlType="submit" block size="large">
                                Calcular cuota mensual
                            </Button>
                        </Form>

                        {monthlyPayment && (
                            <div className="Container-Amount">
                                <Text strong>Tu cuota mensual aproximada sería:</Text>
                                <Title level={3} className="text-[#1890ff] mt-2">
                                    S/. {monthlyPayment.toFixed(2)}
                                </Title>
                            </div>
                        )}
                    </Col>

                    <Col xs={24} md={10} className="group-indications">
                        <div>
                            <PhoneOutlined style={{ fontSize: 32, color: '#00447b', margin: '0 20px 0 5px' }} />
                            <Text className="block mt-2">Te llamamos solo si tú lo deseas</Text>
                        </div>
                        <div>
                            <CalendarOutlined style={{ fontSize: 32, color: '#00447b', margin: '0 20px 0 5px'  }} />
                            <Text className="block mt-2">Plazos flexibles hasta 84 meses</Text>
                        </div>
                        <div>
                            <SmileOutlined style={{ fontSize: 32, color: '#00447b', margin: '0 20px 0 5px'  }} />
                            <Text className="block mt-2">Proceso sin compromiso</Text>
                        </div>
                    </Col>
                </Row>

                <Divider />
                <Text type="secondary" style={{ color: 'black'}}>
                    Este simulador es referencial y no representa una oferta formal. Para más información, te contactaremos si así lo deseas.
                </Text>
            </Card>
        </div>
    )
}