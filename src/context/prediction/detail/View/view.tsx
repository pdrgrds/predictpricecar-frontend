import { BreadcrumbComponent } from "../../../shared/Components/Breadcrumb";
import { ListEvaluationSection } from "../../../shared/Components/Section/ListEvaluation";
import { IPropsScreen } from "../Domain/IPropsScreen";
import './style.scss'

export const View = (props: IPropsScreen) => {
    return (
        <div className="DetailPredictioncomponent">
            
            <BreadcrumbComponent
                items={[
                    { label: 'Inicio', link: "/" },
                    { label: 'Valorar vehículo', link: "/form-prediction" },
                    { label: 'Detalle', link: "/form-detail/23423do2-d2332d23-d2323432e-23d232324" },
                ]}
            />

            <div>
                <h3>Detalle de la evaluación</h3>
                <div className="Group-detail">
                    <span className="sub-category">1) Características Generales:</span>

                    <DetailComponent label="Año de fabricación" text="2019" />
                    <DetailComponent label="Marca" text="Chevrolet" />
                    <DetailComponent label="Modelo" text="Camaro" />
                    <DetailComponent label="Versión" text="4" />
                    <DetailComponent label="Tipo de Combustible" text="Gasolina" />
                    <DetailComponent label="Color" text="Blanco" />
                    <DetailComponent label="Tipo de transmisión" text="Manual" />
                    <DetailComponent label="Número de puertas" text="2" />
                    <DetailComponent label="Potencia del motor (Cilindrica)" text="4" />
                    <DetailComponent label="Tipo de tracción" text="RWD" />

                    <span className="sub-category">2.1) Historial de Mantenimiento:</span>

                    <DetailComponent label="Kilometraje histórico" text="2019" />
                    <DetailComponent label="Frecuencia de cambios de aceite" text="Chevrolet" />
                    <DetailComponent label="Frecuencia de cambios de filtro" text="Camaro" />
                    <DetailComponent label="Historial de reparaciones del motor" text="4" />
                    <DetailComponent label="Historial de reemplazos de componentes críticos" text="Gasolina" />
                    <DetailComponent label="Pruebas de compresión" text="Blanco" />
                    <DetailComponent label="Informe de emisiones" text="Manual" />
                    <DetailComponent label="Revisiones realizadas según fabricante" text="2" />

                    <span className="sub-category">2.2) Documentación:</span>

                    <DetailComponent label="Documentos en regla (Tarjeta de propiedad, SOAT)" text="SI" />
                    <DetailComponent label="Impuestos al día" text="SI" />
                    <DetailComponent label="Revisión técnica vigente" text="SI" />

                    <span className="sub-category">3.1) Condición Física:</span>
                    <DetailComponent label="Estado de la carrocería" text="BUENO" />
                    <DetailComponent label="Estado del chasis" text="BUENO" />
                    <DetailComponent label="Estado de los frenos" text="INTERMEDIO" />
                    <DetailComponent label="Estado de la suspensión" text="INTERMEDIO" />
                    <DetailComponent label="Estado del Sistema de Escape" text="BUENO" />

                    <span className="sub-category">3.2) Interior:</span>
                    <DetailComponent label="Frontal" text="ver imagen" />
                    <DetailComponent label="Lateral Izquierdo" text="ver imagen" />
                    <DetailComponent label="Lateral Derecho" text="ver imagen" />
                    <DetailComponent label="Motor (Comportamiento)" text="ver imagen" />
                    <DetailComponent label="Interior" text="ver imagen" />
                    <DetailComponent label="Asientos" text="ver imagen" />
                    <DetailComponent label="Tablero" text="ver imagen" />


                </div>
            </div>

            <ListEvaluationSection list={[]} />
        </div>
    )
}

interface ItemDetail {
    label: string;
    text: string
}

const DetailComponent = (props: ItemDetail) => {
    return (
        <div className="DetailComponent">
            <label>{props.label}:</label>
            <span>{props.text}</span>
        </div>
    )
}