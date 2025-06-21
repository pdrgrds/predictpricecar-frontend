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
                    name="mileage"
                    isRequired
                    type="number"
                />

                <InputInternComponent
                    form={props.formHistorial}
                    label="Frecuencia de cambios de aceite (meses)"
                    name="oil_change_frequency"
                    isRequired
                    type="number"
                />

                <InputInternComponent
                    form={props.formHistorial}
                    label="Frecuencia de cambios de filtro (meses)"
                    name="filter_change_frequency"
                    isRequired
                    type="number"
                />

                <CheckboxComponent
                    form={props.formHistorial}
                    label="Modificaciones del motor"
                    name="engine_modifications"
                    isRequired
                />

                <CheckboxComponent
                    form={props.formHistorial}
                    label="Reemplazo de componentes críticos"
                    name="critical_replacements"
                    isRequired
                />

                <span className="sub-category">2.2) Documentación:</span>

                <CheckboxComponent
                    form={props.formHistorial}
                    label="Documentos en regla (Tarjeta de propiedad, SOAT)"
                    name="documentation_in_order"
                />

                <CheckboxComponent
                    form={props.formHistorial}
                    label="Impuestos al día"
                    name="taxes_in_order"
                />

                <CheckboxComponent
                    form={props.formHistorial}
                    label="Revisión técnica vigente"
                    name="technical_review_valid"
                />
            </div>

            <div className="group-input-form">
                <button className="btn-cancel"onClick={() => props.onChangeView("general")}>Regresar</button>
                <button className="btn-primary"onClick={() => props.onChangeView("adiccional")}>Siguiente</button>
            </div>
        </div>
    )
}