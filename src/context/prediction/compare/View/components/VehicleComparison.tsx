import React, { useState } from 'react';
import { Card, Col, Row, Statistic, Divider, Button, Typography } from 'antd';
import { Bar } from '@ant-design/charts';
import { DollarCircleOutlined } from '@ant-design/icons';
import { Carousel, Descriptions } from 'antd';
import { ModalImageVehicle } from './ModalImageVehicle';

const { Title, Text } = Typography;

interface Vehicle {
  id: number;
  name: string;
  image: string;
  price: number;
  features: { [key: string]: number };
}

interface VehicleComparisonProps {
  vehicle1: Vehicle;
  vehicle2: Vehicle;
}

const VehicleComparison: React.FC<VehicleComparisonProps> = ({ vehicle1, vehicle2 }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [activeImages, setActiveImages] = useState<string[]>([]);
  const [activeTitle, setActiveTitle] = useState<string>('');

  const data = Object.keys(vehicle1.features).flatMap((key) => [
    {
      feature: key,
      value: vehicle1.features[key],
      vehicle: vehicle1.name,
    },
    {
      feature: key,
      value: vehicle2.features[key],
      vehicle: vehicle2.name,
    },
  ]);

  const config = {
    data,
    isGroup: true,
    xField: 'feature',
    yField: 'value',
    seriesField: 'vehicle',
    color: ['#405FF2', '#FF4D4F'],
    label: {
      position: 'middle',
      layout: [
        { type: 'interval-adjust-position' },
        { type: 'interval-hide-overlap' },
        { type: 'adjust-color' },
      ],
    },
  };

  const renderVehicleCard = (vehicle: Vehicle, color: string) => (
    <Card
      hoverable
      style={{
        borderRadius: '8px',
        boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
      }}
    >
      <Carousel autoplay>
        {[vehicle.image, vehicle.image, vehicle.image].map((img, idx) => (
          <div key={idx}>
            <img
              alt={`${vehicle.name} - ${idx}`}
              src={img}
              style={{ width: '100%', borderRadius: '8px', maxHeight: '250px', objectFit: 'cover' }}
              onClick={() => {
                setActiveImages([vehicle.image, vehicle.image, vehicle.image]);
                setActiveTitle(vehicle.name);
                setIsModalVisible(true);
              }}
            />
          </div>
        ))}
      </Carousel>

      <div style={{ padding: '16px' }}>
        <Title level={3} style={{ color }}>{vehicle.name}</Title>

        <Statistic
          title="Precio"
          value={vehicle.price}
          prefix={<DollarCircleOutlined />}
          precision={0}
          valueStyle={{ color }}
        />

        <Divider />

        <Descriptions
          column={1}
          size="small"
          labelStyle={{ fontWeight: 'bold' }}
          contentStyle={{ color: '#555' }}
        >
          {Object.entries(vehicle.features).map(([key, value]) => (
            <Descriptions.Item label={key} key={key}>
              {value}
            </Descriptions.Item>
          ))}
        </Descriptions>

        <Divider />

        <Button type="primary" block style={{ backgroundColor: color, borderColor: color }}>
          Ver detalles
        </Button>
      </div>
    </Card>
  );

  return (
    <div style={{ padding: '20px' }}>
      <Row gutter={[24, 24]}>
        <Col xs={24} md={12}>{renderVehicleCard(vehicle1, '#405FF2')}</Col>
        <Col xs={24} md={12}>{renderVehicleCard(vehicle2, '#FF4D4F')}</Col>
      </Row>

      <ModalImageVehicle title={activeTitle} images={activeImages} visible={isModalVisible} onClose={() => setIsModalVisible(false)} />
      <Divider />

      <Title level={4}>Comparativa de características</Title>
      <Bar {...config} />

      <Divider />

      <Title level={4}>Información adicional</Title>
      <Text>
        Compara estos dos vehículos para encontrar el que mejor se adapte a tus necesidades y presupuesto.
        <br />
        Ambos ofrecen características destacadas, pero cada uno tiene ventajas únicas.
      </Text>
    </div>
  );
};

export default VehicleComparison;
