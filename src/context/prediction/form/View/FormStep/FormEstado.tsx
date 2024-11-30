import { SelectInternComponent } from "../../../../shared/Components/select/SelectIntern"
import { UploadInternComponent } from "../../../../shared/Components/Upload"
import { IPropsScreen } from "../../Domain/IPropsScreen"

export const FormEstado = (props: IPropsScreen) => {

    return (
        <div className="FormEstado">

            <h2>DATOS ESTADO</h2>

            <div className="group-inputs-form">
                <span className="sub-category">3.1) Condición Física:</span>
                <SelectInternComponent
                    onChange={(value) => { props.formGeneral.setFieldValue("body_condition", value) }}
                    options={props.configForm.optionsInformation.vehicleconditions}
                    label="Estado de la carrocería"
                    isRequired
                />

                <SelectInternComponent
                    onChange={(value) => { props.formGeneral.setFieldValue("chassis_condition", value) }}
                    options={props.configForm.optionsInformation.vehicleconditions}
                    label="Estado del chasis"
                    isRequired
                />

                <SelectInternComponent
                    onChange={(value) => { props.formGeneral.setFieldValue("brakes_condition", value) }}
                    options={props.configForm.optionsInformation.vehicleconditions}
                    label="Estado de los frenos"
                    isRequired
                />

                <SelectInternComponent
                    onChange={(value) => { props.formGeneral.setFieldValue("suspension_condition", value) }}
                    options={props.configForm.optionsInformation.vehicleconditions}
                    label="Estado de la suspensión"
                    isRequired
                />

                <SelectInternComponent
                    onChange={(value) => { props.formGeneral.setFieldValue("exhaust_system_condition", value) }}
                    options={props.configForm.optionsInformation.vehicleconditions}
                    label="Estado del Sistema de Escape"
                    isRequired
                />

                <span className="sub-category">3.2) Interior:</span>

                <SelectInternComponent
                    onChange={(value) => { props.formGeneral.setFieldValue("air_conditioning_condition", value) }}
                    options={props.configForm.optionsInformation.vehicleconditions}
                    label="Estado del sistema de aire acondicionado"
                    isRequired
                />

                <SelectInternComponent
                    onChange={(value) => { props.formGeneral.setFieldValue("electrical_system_condition", value) }}
                    options={props.configForm.optionsInformation.vehicleconditions}
                    label="Estado de los sistemas eléctricos"
                    isRequired
                />

                <span className="sub-category">3.3) Imágenes:</span>

                <UploadInternComponent
                    form={props.formEstado}
                    label="Frontal"
                    name="front_image"
                    isRequired
                    icon="fa-solid fa-upload"
                />

                <UploadInternComponent
                    form={props.formEstado}
                    label="Lateral Izquierdo"
                    name="left_side_image"
                    isRequired
                    icon="fa-solid fa-upload"
                />

                <UploadInternComponent
                    form={props.formEstado}
                    label="Lateral Derecho"
                    name="right_side_image"
                    isRequired
                    icon="fa-solid fa-upload"
                />

                <UploadInternComponent
                    form={props.formEstado}
                    label="Trasera"
                    name="rear_image"
                    isRequired
                    icon="fa-solid fa-upload"
                />

                <UploadInternComponent
                    form={props.formEstado}
                    label="Motor (Comportamiento)"
                    name="engine_image"
                    isRequired
                    icon="fa-solid fa-upload"
                />

                <UploadInternComponent
                    form={props.formEstado}
                    label="Interior"
                    name="interior_image"
                    isRequired
                    icon="fa-solid fa-upload"
                />

                <UploadInternComponent
                    form={props.formEstado}
                    label="Asientos"
                    name="seats_image"
                    isRequired
                    icon="fa-solid fa-upload"
                />

                <UploadInternComponent
                    form={props.formEstado}
                    label="Tablero"
                    name="dashboard_image"
                    isRequired
                    icon="fa-solid fa-upload"
                />
            </div>

            <div className="group-input-form">
                <button className="btn-cancel" onClick={() => props.onChangeView("historial")}>Regresar</button>
                <button className="btn-primary" onClick={() => props.onSubmit()}>Evaluar</button>
            </div>
        </div>
    )
}