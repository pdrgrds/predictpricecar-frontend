import { BreadcrumbComponent } from "../../../shared/Components/Breadcrumb";
import { StepperComponent } from "../../../shared/Components/stepper";
import { IConfigForm } from "../Domain/IConfigForm";
import { IPropsScreen } from "../Domain/IPropsScreen";
import { FormEstado } from "./FormStep/FormEstado";
import { FormGeneral } from "./FormStep/FormGeneral";
import { FormHistorial } from "./FormStep/FormHistorial";
import './style.scss'

export const View = (props: IPropsScreen) => {
    const renderForm = {
        "general": <FormGeneral {...props}/>,
        "historial": <FormHistorial {...props}/>,
        "adiccional": <FormEstado {...props} />
    }

    return (
        <div className="FormPredictioncomponent">
            
            <BreadcrumbComponent
                items={[
                    { label: 'Inicio', link: "/" },
                    { label: 'Valorar vehículo', link: undefined },
                    { label: 'Formulario', link: undefined },
                ]}
            />

            <div className="ContentStep">
                <StepperComponent
                    onChange={(key: IConfigForm["module"]) => props.onChangeView(key)}
                    currentKey={props.configForm.module}
                    options={[
                        { key: 'general', label: 'General' },
                        { key: 'historial', label: 'Historial' },
                        { key: 'adiccional', label: 'Estado' },
                    ]}
                />
            </div>

            <div className="ContentForm">
                {renderForm[props.configForm.module]}
            </div>
        </div>
    )
}