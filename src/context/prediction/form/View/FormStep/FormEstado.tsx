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
                    onChange={() => {}}
                    options={[]}
                    label="Estado de la carrocería"
                    isRequired
                />

                <SelectInternComponent
                    onChange={() => {}}
                    options={[]}
                    label="Estado del chasis"
                    isRequired
                />

                <SelectInternComponent
                    onChange={() => {}}
                    options={[]}
                    label="Estado de los frenos"
                    isRequired
                />

                <SelectInternComponent
                    onChange={() => {}}
                    options={[]}
                    label="Estado de la suspensión"
                    isRequired
                />

                <SelectInternComponent
                    onChange={() => {}}
                    options={[]}
                    label="Estado del Sistema de Escape"
                    isRequired
                />

                <span className="sub-category">3.2) Interior:</span>

                <SelectInternComponent
                    onChange={() => {}}
                    options={[]}
                    label="Estado del sistema de aire acondicionado"
                    isRequired
                />

                <SelectInternComponent
                    onChange={() => {}}
                    options={[]}
                    label="Estado de los sistemas eléctricos"
                    isRequired
                />

                <span className="sub-category">3.3) Imágenes:</span>

                <UploadInternComponent
                    form={props.formEstado}
                    label="Frontal"
                    name="frontal"
                    isRequired
                    icon="fa-solid fa-upload"
                />

                <UploadInternComponent
                    form={props.formEstado}
                    label="Lateral Izquierdo"
                    name="lateralIzquierdo"
                    isRequired
                    icon="fa-solid fa-upload"
                />

                <UploadInternComponent
                    form={props.formEstado}
                    label="Lateral Derecho"
                    name="lateralDerecho"
                    isRequired
                    icon="fa-solid fa-upload"
                />

                <UploadInternComponent
                    form={props.formEstado}
                    label="Trasera"
                    name="trasera"
                    isRequired
                    icon="fa-solid fa-upload"
                />

                <UploadInternComponent
                    form={props.formEstado}
                    label="Motor (Comportamiento)"
                    name="motor"
                    isRequired
                    icon="fa-solid fa-upload"
                />

                <UploadInternComponent
                    form={props.formEstado}
                    label="Interior"
                    name="interio"
                    isRequired
                    icon="fa-solid fa-upload"
                />

                <UploadInternComponent
                    form={props.formEstado}
                    label="Asientos"
                    name="asientos"
                    isRequired
                    icon="fa-solid fa-upload"
                />

                <UploadInternComponent
                    form={props.formEstado}
                    label="Tablero"
                    name="tablero"
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