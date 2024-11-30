import { FormikProps } from "formik";
import './style.scss';

interface IProps {
    name: string;
    label: string;
    form: FormikProps<any>;
    icon?: string;
    isRequired?: boolean;
}

export const CheckboxComponent = (props: IProps) => {
    return (
        <div className="form-group">
            <span className="label-form">{props.label} {props.isRequired && <span className="required"> (*) </span>}</span>
            <div className="group-checkbox-input">
                {props.icon && <i className={props.icon} />}
                <label className="checkbox-container">
                    <input
                        type="checkbox"
                        id={props.name}
                        name={props.name}
                        checked={props.form.values[props.name]}
                        onChange={props.form.handleChange}
                        onBlur={props.form.handleBlur}
                    />
                    <span className="checkmark"></span>
                </label>
            </div>
            {props.form.touched[props.name] && props.form.errors[props.name] ? (
                <div className="error-message">{props.form.errors[props.name] as string}</div>
            ) : null}
        </div>
    );
}
