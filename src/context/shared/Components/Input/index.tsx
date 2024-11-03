import { FormikProps } from "formik";
import './style.scss'

interface IProps{
    name: string;
    label: string;
    type?: React.HTMLInputTypeAttribute | undefined;
    form: FormikProps<any>
    icon?: string;
}

export const InputComponent = (props: IProps) => {
    return (
        <div className="form-group">
            <div className="group-icon-input">
                { props.icon && <i className={props.icon} /> }
                <input
                    type={props.type || 'text'}
                    id={`${props.name}`}
                    name={props.name}
                    placeholder={props.label}
                    className="form-control"
                    value={props.form.values[props.name]}
                    onChange={props.form.handleChange}
                    onBlur={props.form.handleBlur}
                />
            </div>
            {props.form.touched[props.name] && props.form.errors[props.name] ? (
                <div className="error-message">{props.form.errors[props.name] as string}</div>
            ) : null}
        </div>
    )
} 