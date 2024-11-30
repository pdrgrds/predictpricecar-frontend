import { CheckboxComponent } from "../../../../shared/Components/Checkbox"
import { InputInternComponent } from "../../../../shared/Components/Input/InputIntern"
import { IPropsScreen } from "../../Domain/IPropsScreen"

export const FormHistorial = (props: IPropsScreen) => {

    return (
        <div className="FormHistorial">

            <h2>DATOS HISTÓRICOS</h2>

            <div className="group-inputs-form">
                <span className="sub-category">2.1) Historial de Mantenimiento:</span>

                <InputInternComponent
                    form={props.formHistorial}
                    label="Kilometraje histórico"
                    name=""
                    isRequired
                />

                <InputInternComponent
                    form={props.formHistorial}
                    label="Frecuencia de cambios de aceite"
                    name=""
                    isRequired
                />

                <InputInternComponent
                    form={props.formHistorial}
                    label="Frecuencia de cambios de filtro"
                    name=""
                    isRequired
                />

                <InputInternComponent
                    form={props.formHistorial}
                    label="Historial de reparaciones del motor"
                    name=""
                    isRequired
                />

                <InputInternComponent
                    form={props.formHistorial}
                    label="Historial de reemplazos de componentes críticos"
                    name=""
                    isRequired
                />

                <InputInternComponent
                    form={props.formHistorial}
                    label="Pruebas de compresión"
                    name=""
                />

                <InputInternComponent
                    form={props.formHistorial}
                    label="Informe de emisiones"
                    name=""
                />

                <InputInternComponent
                    form={props.formHistorial}
                    label="Revisiones realizadas según fabricante"
                    name=""
                />

                <span className="sub-category">2.2) Documentación:</span>

                <CheckboxComponent
                    form={props.formHistorial}
                    label="Documentos en regla (Tarjeta de propiedad, SOAT)"
                    name=""
                />

                <CheckboxComponent
                    form={props.formHistorial}
                    label="Impuestos al día"
                    name=""
                />

                <CheckboxComponent
                    form={props.formHistorial}
                    label="Revisión técnica vigente"
                    name=""
                />
            </div>

            <div className="group-input-form">
                <button className="btn-cancel"onClick={() => props.onChangeView("general")}>Regresar</button>
                <button className="btn-primary"onClick={() => props.onChangeView("adiccional")}>Siguiente</button>
            </div>
        </div>
    )
}