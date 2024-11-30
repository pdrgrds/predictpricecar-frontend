import { BreadcrumbComponent } from "../../../shared/Components/Breadcrumb";
import { ListEvaluationSection } from "../../../shared/Components/Section/ListEvaluation";
import { IPropsScreen } from "../Domain/IPropsScreen";
import { Gallery } from "react-grid-gallery";
import './style.scss'
import { AdapterGenerico } from "../../../shared/Infraestructure/AdapterGenerico";

export const View = (props: IPropsScreen) => {
    const images = [
        {
           src: props.detail?.front_image || '',
           width: 350,
           height: 200,
           tags: [{ value: 'Frontal', title: 'Frontal' }]
        },
        {
            src: props.detail?.left_side_image || '',
            width: 350,
            height: 200,
            tags: [{ value: 'Lateral Izquierdo', title: 'Lateral Izquierdo' }]
        },
        {
            src: props.detail?.right_side_image || '',
            width: 350,
            height: 200,
            tags: [{ value: 'Lateral Derecho', title: 'Lateral Derecho' }]
        },
        {
            src: props.detail?.engine_image || '',
            width: 350,
            height: 200,
            tags: [{ value: 'Motor', title: 'Motor (Comportamiento)' }]
        },
        {
            src: props.detail?.rear_image || '',
            width: 350,
            height: 200,
            tags: [{ value: 'Interior', title: 'Interior' }]
        },
        {
            src: props.detail?.seats_image || '',
            width: 350,
            height: 200,
            tags: [{ value: 'Asientos', title: 'Asientos' }]
        },
        {
            src: props.detail?.dashboard_image || '',
            width: 350,
            height: 200,
            tags: [{ value: 'Tablero', title: 'Tablero' }]
        }
    ];

    return (
        <div className="DetailPredictioncomponent">
            
            <BreadcrumbComponent
                items={[
                    { label: 'Inicio', link: "/" },
                    { label: 'Valorar vehículo', link: "/form-prediction" },
                    { label: 'Detalle', link: `${props.detail?.id || ''}` },
                ]}
            />

            <div>
                <h3>Detalle de la evaluación</h3>
                <div className="Group-detail">
                    <span className="sub-category">1) Características Generales:</span>

                    <DetailComponent label="Año de fabricación" text={props.detail?.year_of_manufacture} />
                    <DetailComponent label="Marca" text={props.detail?.brand}  />
                    <DetailComponent label="Modelo" text={props.detail?.model} />
                    <DetailComponent label="Versión" text={props.detail?.version} />
                    <DetailComponent label="Tipo de Combustible" text={props.detail?.fuel_type} />
                    <DetailComponent label="Color" text={props.detail?.color} />
                    <DetailComponent label="Tipo de transmisión" text={props.detail?.transmission_type} />
                    <DetailComponent label="Número de puertas" text={props.detail?.number_of_doors} />
                    <DetailComponent label="Potencia del motor (Cilindrica)" text={props.detail?.engine_power} />
                    <DetailComponent label="Tipo de tracción" text={props.detail?.traction_type} />

                    <span className="sub-category">2.1) Historial de Mantenimiento:</span>

                    <DetailComponent label="Kilometraje histórico" text={props.detail?.mileage} />
                    <DetailComponent label="Frecuencia de cambios de aceite" text={props.detail?.oil_change_frequency} />
                    <DetailComponent label="Frecuencia de cambios de filtro" text={props.detail?.filter_change_frequency} />
                    <DetailComponent label="Modificaciones del motor" text={props.detail?.engine_modifications ? 'SI' : 'NO'} />
                    <DetailComponent label="Reemplazo de componentes críticos" text={props.detail?.critical_replacements ? 'SI' : 'NO'} />

                    <span className="sub-category">2.2) Documentación:</span>

                    <DetailComponent label="Documentos en regla (Tarjeta de propiedad, SOAT)" text={props.detail?.documentation_in_order ? 'SI' : 'NO'} />
                    <DetailComponent label="Impuestos al día" text={props.detail?.taxes_in_order ? 'SI' : 'NO'} />
                    <DetailComponent label="Revisión técnica vigente" text={props.detail?.technical_review_valid ? 'SI' : 'NO'} />

                    <span className="sub-category">3.1) Condición Física:</span>
                    <DetailComponent label="Estado de la carrocería" text={props.detail?.body_condition} />
                    <DetailComponent label="Estado del chasis" text={props.detail?.chassis_condition} />
                    <DetailComponent label="Estado de los frenos" text={props.detail?.brakes_condition} />
                    <DetailComponent label="Estado de la suspensión" text={props.detail?.suspension_condition} />
                    <DetailComponent label="Estado del Sistema de Escape" text={props.detail?.exhaust_system_condition} />

                    <span className="sub-category">3.2) Interior:</span>
                    <Gallery images={images} />

                    <span className="sub-category">4.1) Resultado:</span>
                    <DetailComponent label="Valor estimado" text={AdapterGenerico.formatCurrentMoney(parseInt(`${props.detail?.valued_amount || 0}`))} />

                    <div className="group-input-form">
                        <button className="btn-primary" onClick={() => props.redirectPage("/form-prediction")}>Nuevo Registro</button>
                        <button className="btn-primary">Publicar</button>
                    </div>
                </div>

            </div>

            <ListEvaluationSection list={[]} />
        </div>
    )
}

interface ItemDetail {
    label: string;
    text: any
}

const DetailComponent = (props: ItemDetail) => {
    return (
        <div className="DetailComponent">
            <label>{props.label}:</label>
            <span>{props.text}</span>
        </div>
    )
}