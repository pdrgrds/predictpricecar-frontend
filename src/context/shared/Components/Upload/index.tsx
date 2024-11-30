import { FormikProps } from "formik";
import './style.scss'

interface IProps {
    name: string;
    label: string;
    form: FormikProps<any>;
    icon?: string;
    isRequired?: boolean;
}

export const UploadInternComponent = (props: IProps) => {
    return (
        <div className="form-group">
            <span className="label-form">
                {props.label} {props.isRequired && <span className="required"> (*) </span>}
            </span>
            <div className="upload-container">
                {props.icon && <i className={props.icon} />}
                <label htmlFor={props.name} className="upload-label">
                    Seleccionar archivo
                </label>
                <input
                    type="file"
                    id={props.name}
                    name={props.name}
                    className="file-input"
                    onChange={(event) => {
                        props.form.setFieldValue(props.name, event.currentTarget.files?.[0]);
                    }}
                    onBlur={props.form.handleBlur}
                />
            </div>
            {props.form.touched[props.name] && props.form.errors[props.name] ? (
                <div className="error-message">{props.form.errors[props.name] as string}</div>
            ) : null}
        </div>
    );
};
