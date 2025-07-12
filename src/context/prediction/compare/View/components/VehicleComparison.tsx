import React, { useState } from 'react';
import { Card, Col, Row, Statistic, Divider, Button, Typography } from 'antd';
import { Bar } from '@ant-design/charts';
import { DollarCircleOutlined } from '@ant-design/icons';
import { Carousel, Descriptions } from 'antd';
import { ModalImageVehicle } from './ModalImageVehicle';
import { EntityVehiclePrediction } from '../../../../shared/Domain/Catalog/EntityVehiclePrediction';
import { useNavigate } from 'react-router-dom';

const { Title, Text } = Typography;

interface VehicleComparisonProps {
  vehicle1: EntityVehiclePrediction;
  vehicle2: EntityVehiclePrediction;
}

const VehicleComparison: React.FC<VehicleComparisonProps> = ({ vehicle1, vehicle2 }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [activeImages, setActiveImages] = useState<string[]>([]);
  const [activeTitle, setActiveTitle] = useState<string>('');
  const navigate = useNavigate();

  const data = [
    {
      feature: 'Kilometraje',
      value: vehicle1.mileage,
      vehicle: `1 - ${vehicle1.model_info.name}`,
      kevVehicle: 1
    },
    {
      feature: 'Cilindrica',
      value: vehicle1.engine_power,
      vehicle: `1 - ${vehicle1.model_info.name}`,
      kevVehicle: 1
    },
    {
      feature: 'Nro Puertas',
      value: vehicle1.number_of_doors,
      vehicle: `1 - ${vehicle1.model_info.name}`,
      kevVehicle: 1
    },
    {
      feature: 'Año',
      value: vehicle1.year_of_manufacture,
      vehicle: `1 - ${vehicle1.model_info.name}`,
      kevVehicle: 1
    },
    {
      feature: 'Precio',
      value: vehicle1.valued_amount,
      vehicle: `1 - ${vehicle1.model_info.name}`,
      kevVehicle: 1
    },
    {
      feature: 'Kilometraje',
      value: vehicle2.mileage,
      vehicle: `2 - ${vehicle2.model_info.name}`,
      kevVehicle: 2
    },
    {
      feature: 'Cilindrica',
      value: vehicle2.engine_power,
      vehicle: `2 - ${vehicle2.model_info.name}`,
      kevVehicle: 2
    },
    {
      feature: 'Nro Puertas',
      value: vehicle2.number_of_doors,
      vehicle: `2 - ${vehicle2.model_info.name}`,
      kevVehicle: 2
    },
    {
      feature: 'Año',
      value: vehicle2.year_of_manufacture,
      vehicle: `2 - ${vehicle2.model_info.name}`,
      kevVehicle: 2
    },
    {
      feature: 'Precio',
      value: vehicle2.valued_amount,
      vehicle: `2 - ${vehicle2.model_info.name}`,
      kevVehicle: 2
    },
  ]

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

  const renderVehicleCard = (vehicle: EntityVehiclePrediction, color: string, key: 1 | 2) => (
    <Card
      hoverable
      style={{
        borderRadius: '8px',
        boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
      }}
    >
      <Carousel autoplay>
        {[
          { image: vehicle.rear_image, name: 'Trasera' },
          { image: vehicle.front_image, name: 'Delantera' },
          { image: vehicle.seats_image, name: 'Asientos' },
          { image: vehicle.engine_image, name: 'Motor' },
          { image: vehicle.dashboard_image, name: 'Panel Control' },
          { image: vehicle.interior_image, name: 'Interior' },
          { image: vehicle.left_side_image, name: 'Lado Izquierdo' },
          { image: vehicle.right_side_image, name: 'Lado Derecho' },
        ].map((img, idx) => (
          <div key={idx}>
            <img
              alt={`${img.name} - ${idx}`}
              src={img.image}
              style={{ width: '100%', borderRadius: '8px', maxHeight: '250px', objectFit: 'cover' }}
              onClick={() => {
                setActiveImages(
                  [
                    vehicle.rear_image,
                    vehicle.front_image,
                    vehicle.seats_image,
                    vehicle.engine_image,
                    vehicle.dashboard_image,
                    vehicle.interior_image,
                    vehicle.left_side_image,
                    vehicle.right_side_image,
                  ]
                );
                setActiveTitle(vehicle.model_info.name);
                setIsModalVisible(true);
              }}
            />
          </div>
        ))}
      </Carousel>

      <div style={{ padding: '16px' }}>
        <Title level={3} style={{ color }}>{vehicle.model_info.name}</Title>

        <Statistic
          title="Precio"
          value={vehicle.valued_amount}
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
          {data.filter(row => row.kevVehicle === key).map((value) => (
            <Descriptions.Item label={value.feature} key={key}>
              {value.value}
            </Descriptions.Item>
          ))}
        </Descriptions>

        <Divider />

        <Button onClick={() => navigate(`/form-detail/${vehicle.id}`)} type="primary" block style={{ backgroundColor: color, borderColor: color }}>
          Ver detalles
        </Button>
      </div>
    </Card>
  );

  return (
    <div style={{ padding: '20px' }}>
      <Row gutter={[24, 24]}>
        <Col xs={24} md={12}>{renderVehicleCard(vehicle1, '#405FF2', 1)}</Col>
        <Col xs={24} md={12}>{renderVehicleCard(vehicle2, '#FF4D4F', 2)}</Col>
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
