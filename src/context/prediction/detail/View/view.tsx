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
          </div>
        </section>

        <ListEvaluationSection className='detail__card general page-intern-vehicles' list={[]}/>
      </main>
    </div>
  );
};