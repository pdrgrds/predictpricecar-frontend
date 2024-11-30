import { InputInternComponent } from "../../../../shared/Components/Input/InputIntern"
import { SelectInternComponent } from "../../../../shared/Components/select/SelectIntern"
import { IPropsScreen } from "../../Domain/IPropsScreen"

export const FormGeneral = (props: IPropsScreen) => {

    return (
        <div className="FormGeneral">
            <h2>DATOS GENERALES</h2>

            <div className="group-inputs-form">
                <span className="sub-category">1) Características Generales:</span>

                <InputInternComponent
                    form={props.formGeneral}
                    label="Año de fabricación"
                    name=""
                    isRequired
                />

                <SelectInternComponent
                    onChange={() => {}}
                    options={[]}
                    label="Marca"
                    isRequired
                />

                <InputInternComponent
                    form={props.formGeneral}
                    label="Modelo"
                    name=""
                    isRequired
                />

                <InputInternComponent
                    form={props.formGeneral}
                    label="Versión"
                    name=""
                    isRequired
                />

                <SelectInternComponent
                    onChange={() => {}}
                    options={[]}
                    label="Tipo de Combustible"
                    isRequired
                />

                <InputInternComponent
                    form={props.formGeneral}
                    label="Color"
                    name=""
                    isRequired
                />

                <SelectInternComponent
                    onChange={() => {}}
                    options={[]}
                    label="Tipo de transmisión"
                    isRequired
                />

                <InputInternComponent
                    form={props.formGeneral}
                    label="Número de puertas"
                    name=""
                    isRequired
                />

                <InputInternComponent
                    form={props.formGeneral}
                    label="Potencia del motor (Cilindrica)"
                    name=""
                    isRequired
                />

                <SelectInternComponent
                    onChange={() => {}}
                    options={[]}
                    label="Tipo de tracción"
                    isRequired
                />
            </div>

            <div className="group-input-form">
                <button className="btn-primary"onClick={() => props.onChangeView("historial")}>Siguiente</button>
            </div>
        </div>
    )
}