import { FormikProps } from "formik";
import './style.css'

interface IProps{
    name: string;
    label: string;
    type?: React.HTMLInputTypeAttribute | undefined;
    form: FormikProps<any>
}

export const InputComponent = (props: IProps) => {
    return (
        <div className="form-group">
            <i className="fa-solid fa-user" style={{ fontSize: 20 }} />
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
            {props.form.touched[props.name] && props.form.errors[props.name] ? (
                <div className="error-message">{props.form.errors[props.name] as string}</div>
            ) : null}
        </div>
    )
} 