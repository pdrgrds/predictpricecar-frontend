import { FormikProps } from "formik";
import './style.scss'

interface IProps {
    name: string;
    label: string;
    form: FormikProps<any>;
    icon?: string;
    isRequired?: boolean;
}

export const InputDateComponent = (props: IProps) => {
    return (
        <div className="form-group">
            <span className="label-form">{props.label} {props.isRequired && <span className="required"> (*) </span>}</span>
            <div className="group-icon-input" style={{ borderRadius: 5 }}>
                {props.icon && <i className={props.icon} />}
                <input
                    type="date"
                    id={`${props.name}`}
                    name={props.name}
                    placeholder={props.label}
                    className="form-control"
                    value={props.form.values[props.name]}
                    onChange={props.form.handleChange}
                    onBlur={props.form.handleBlur}
                    style={{ borderRadius: 5 }}
                />
            </div>
            {props.form.touched[props.name] && props.form.errors[props.name] ? (
                <div className="error-message">{props.form.errors[props.name] as string}</div>
            ) : null}
        </div>
    );
};
