import { InputInternComponent } from "../../../../shared/Components/Input/InputIntern"
import { IPropsScreen } from "../../Domain/IPropsScreen"

export const FormHistorial = (props: IPropsScreen) => {

    return (
        <div className="FormHistorial">

            <InputInternComponent
                form={props.formHistorial}
                label=""
                name=""
            />
        </div>
    )
}