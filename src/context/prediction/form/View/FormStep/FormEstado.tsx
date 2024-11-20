import { InputInternComponent } from "../../../../shared/Components/Input/InputIntern"
import { IPropsScreen } from "../../Domain/IPropsScreen"

export const FormEstado = (props: IPropsScreen) => {

    return (
        <div className="FormEstado">

            <InputInternComponent
                form={props.formHistorial}
                label=""
                name=""
            />
        </div>
    )
}