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
                    name="year_of_manufacture"
                    isRequired
                />

                <SelectInternComponent
                    onChange={(value) => { props.formGeneral.setFieldValue("brand", value) }}
                    options={props.configForm.optionsInformation.vehicleBrands}
                    label="Marca"
                    isRequired
                />

                <InputInternComponent
                    form={props.formGeneral}
                    label="Modelo"
                    name="model"
                    isRequired
                />

                <InputInternComponent
                    form={props.formGeneral}
                    label="Versión"
                    name="version"
                    isRequired
                />

                <SelectInternComponent
                    onChange={(value) => { props.formGeneral.setFieldValue("fuel_type", value) }}
                    options={props.configForm.optionsInformation.fuelTypes}
                    label="Tipo de Combustible"
                    isRequired
                />

                <InputInternComponent
                    form={props.formGeneral}
                    label="Color"
                    name="color"
                    isRequired
                />

                <SelectInternComponent
                    onChange={(value) => { props.formGeneral.setFieldValue("transmission_type", value) }}
                    options={props.configForm.optionsInformation.transmissionTypes}
                    label="Tipo de transmisión"
                    isRequired
                />

                <InputInternComponent
                    form={props.formGeneral}
                    label="Número de puertas"
                    name="number_of_doors"
                    isRequired
                />

                <InputInternComponent
                    form={props.formGeneral}
                    label="Potencia del motor (Cilindrica)"
                    name="engine_power"
                    isRequired
                />

                <SelectInternComponent
                    onChange={(value) => { props.formGeneral.setFieldValue("traction_type", value) }}
                    options={props.configForm.optionsInformation.tractionTypes}
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