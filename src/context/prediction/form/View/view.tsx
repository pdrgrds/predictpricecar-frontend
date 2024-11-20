import { StepperComponent } from "../../../shared/Components/stepper";
import { IPropsScreen } from "../Domain/IPropsScreen";
import { FormGeneral } from "./FormStep/FormGeneral";
import './style.scss'

export const View = (props: IPropsScreen) => {
    return (
        <div className="FormPredictioncomponent">
            
            <div className="ContentStep">
                <StepperComponent
                    onChange={() => {}}
                    options={[
                        { key: 'general', label: 'General' },
                        { key: 'historial', label: 'Historial' },
                        { key: 'ADICCIONAL', label: 'Estado' },
                    ]}
                />
            </div>

            <div className="ContentForm">
                <FormGeneral {...props}/>
            </div>
        </div>
    )
}