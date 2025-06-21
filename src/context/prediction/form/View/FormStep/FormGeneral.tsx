import { InputInternComponent } from "../../../../shared/Components/Input/InputIntern"
import { SelectInternComponent } from "../../../../shared/Components/select/SelectIntern"
import { IPropsScreen } from "../../Domain/IPropsScreen"

export const FormGeneral = (props: IPropsScreen) => {
    console.log(props.formGeneral.values);
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
                    type="number"
                />

                <SelectInternComponent
                    onChange={(value) => { props.formGeneral.setFieldValue("brand", value) }}
                    options={props.configForm.optionsInformation.vehicleBrands}
                    label="Marca"
                    isRequired
                />

                <SelectInternComponent
                    onChange={(value) => { props.formGeneral.setFieldValue("model", value) }}
                    options={props.configForm.optionsInformation.vehicleModel.filter(row =>
                        row.dataComplete.marca.id === props.formGeneral.values.brand
                    )}
                    label="Modelo"
                    isRequired
                />

                <SelectInternComponent
                    onChange={(value) => { props.formGeneral.setFieldValue("version", value) }}
                    options={props.configForm.optionsInformation.vehicleVersion.filter(row =>
                        row.dataComplete.modelo.id === props.formGeneral.values.model
                    )}
                    label="Versión"
                    isRequired
                />

                <SelectInternComponent
                    onChange={(value) => { props.formGeneral.setFieldValue("vehicle_type", value) }}
                    options={props.configForm.optionsInformation.vehicleType}
                    label="Tipo Vehículo"
                    isRequired
                />

                <SelectInternComponent
                    onChange={(value) => { props.formGeneral.setFieldValue("fuel_type", value) }}
                    options={props.configForm.optionsInformation.fuelTypes}
                    label="Tipo de Combustible"
                    isRequired
                />

                <SelectInternComponent
                    onChange={(value) => { props.formGeneral.setFieldValue("color", value) }}
                    options={props.configForm.optionsInformation.color}
                    label="Color"
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