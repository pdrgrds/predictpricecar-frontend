import { ModalImageVehicle } from '../../compare/View/components/ModalImageVehicle';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { IPropsScreen } from "../Domain/IPropsScreen";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';
import './style.scss'
import { ListEvaluationSection } from '../../../shared/Components/Section/ListEvaluation';

export const View = (props: IPropsScreen) => {
  const formattedNumber = (amount: number = 0) => Intl.NumberFormat('en-US').format(amount);
  const [showModal, setShowModal] = useState<boolean>(false);
  const lstImage = [
    { image: props.detail?.rear_image, nombre: 'Trasera' },
    { image: props.detail?.front_image, nombre: 'Delantera' },
    { image: props.detail?.seats_image, nombre: 'Asientos' },
    { image: props.detail?.engine_image, nombre: 'Motor' },
    { image: props.detail?.dashboard_image, nombre: 'Panel Control' },
    { image: props.detail?.interior_image, nombre: 'Interior' },
    { image: props.detail?.left_side_image, nombre: 'Lado Izquierdo' },
    { image: props.detail?.right_side_image, nombre: 'Lado Derecho' },
  ]

  return (
    <div className="vehicle-detail">
      <main className="vehicle-detail__content">
        <section className="vehicle-detail__card general">
          <h2>Características generales</h2>
          <div className="info-grid">
            <div><strong>Marca:</strong> {props.detail?.brand_info.name}</div>
            <div><strong>Modelo:</strong> {props.detail?.model_info.name}</div>
            <div><strong>Versión:</strong> {props.detail?.version_info.name}</div>
            <div><strong>Año Fabricación:</strong> {props.detail?.year_of_manufacture}</div>
            <div><strong>Tipo Vehículo:</strong> {props.detail?.vehicle_type_info.name}</div>
            <div><strong>Tipo Combustible:</strong> {props.detail?.fuel_type_info.name}</div>
            <div><strong>Color:</strong> {props.detail?.color_info.name}</div>
            <div><strong>Tipo Transmisión:</strong> {props.detail?.transmission_type_info.name}</div>
            <div><strong>Número Puertas:</strong> {props.detail?.number_of_doors}</div>
            <div><strong>Potencia Motor (Cilíndrica):</strong> {props.detail?.engine_power}</div>
            <div><strong>Tipo Tracción:</strong> {props.detail?.traction_type_info.name}</div>
          </div>
        </section>

        <section className="vehicle-detail__card general">
          <h2>Datos Históricos</h2>
          <div className="info-grid">
            <div><strong>Kilometraje:</strong> {formattedNumber(props.detail?.mileage)} km</div>
            <div><strong>Frecuencia Cambio Aceite:</strong> {props.detail?.oil_change_frequency} {props.detail?.oil_change_frequency === 1 ? 'mes' : 'meses'}</div>
            <div><strong>Frecuencia Cambio Filtro:</strong> {props.detail?.filter_change_frequency} {props.detail?.filter_change_frequency === 1 ? 'mes' : 'meses'}</div>
            <div><strong>Modificaciones Motor:</strong> {props.detail?.engine_modifications ? 'Sí' : '-'}</div>
            <div><strong>Reemplazo Componentes Críticos:</strong> {props.detail?.critical_replacements ? 'Sí' : '-'}</div>
            <div><strong>Documentos Regla:</strong> {props.detail?.documentation_in_order ? 'Sí' : '-'}</div>
            <div><strong>Impuesto Día:</strong> {props.detail?.taxes_in_order ? 'Sí' : '-'}</div>
            <div><strong>Revisión Técnica Vigente:</strong> {props.detail?.technical_review_valid ? 'Sí' : '-'}</div>
          </div>
        </section>

        <section className="vehicle-detail__card general">
          <h2>Estado</h2>
          <div className="info-grid">
            <div><strong>Estado Carrocería:</strong> {props.detail?.body_condition_info.name}</div>
            <div><strong>Estado Chasis:</strong> {props.detail?.chassis_condition_info.name}</div>
            <div><strong>Estado Frenos:</strong> {props.detail?.brakes_condition_info.name}</div>
            <div><strong>Estado Suspensión:</strong> {props.detail?.suspension_condition_info.name}</div>
            <div><strong>Estado Sistema Escape:</strong> {props.detail?.exhaust_system_condition_info.name}</div>
            <div><strong>Estado Sistema Aire Acondicionado:</strong> {props.detail?.air_conditioning_condition_info.name}</div>
            <div><strong>Estado Sistema Eléctrico:</strong> {props.detail?.electrical_system_condition_info.name}</div>
          </div>
        </section>

        <section className="vehicle-detail__card general">
          <h2>Galería del vehículo</h2>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={4}
            className="vehicle-swiper"
          >
            {lstImage.map((item, i) => (
              <SwiperSlide key={i}>
                <img
                  src={item.image}
                  alt={`Foto ${i + 1}`}
                  className="swiper-slide-img"
                  onClick={() => setShowModal(true)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        <ModalImageVehicle title={`${props.detail?.brand_info.name} ${props.detail?.model_info.name}`} images={lstImage.map(row => row.image!)} visible={showModal} onClose={() => setShowModal(false)} />

        <section className="vehicle-detail__card result">
          <h2>Resultados</h2>
          <p>Valor estimado: ${formattedNumber(props.detail?.valued_amount)}</p>
          <div className="actions">
            <button className="primary" onClick={() => props.redirectPage('/form-prediction')}>Nueva predicción</button>
            <button className="primary">Publicar</button>
          </div>
        </section>

        <ListEvaluationSection className='detail__card general page-intern-vehicles' list={[
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
            ]}/>
      </main>
    </div>
  );
};