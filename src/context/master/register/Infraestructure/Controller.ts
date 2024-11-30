import { useFormik } from "formik";
import { EntityFormRegister } from "../Domain/EntityFormRegister";
import * as Yup from 'yup';
import { IPropsScreen } from "../Domain/IPropsScreen";
import { RepositoryImpl } from "./RepositoryImpl";
import { UseCaseRegister } from "../Application/UseCaseRegister";
import { useDispatch } from "react-redux";
import { addLoading, removeLoading } from "../../../shared/Infraestructure/SliceGeneric";
import { toast } from "react-toastify";
import { AdapterErrorMessage } from "../../../shared/Infraestructure/AdapterErrorMessage";
import { useNavigate } from "react-router-dom";

export const Controller = (): IPropsScreen => {
  const repository = new RepositoryImpl();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formRegister = useFormik<EntityFormRegister>({
      initialValues: {
        usuario: '',
        nombres: '',
        apellidos: '',
        correo: '',
        telefono: '',
        password: '',
        confirmPassword: '',
      },
      validationSchema: Yup.object({
        usuario: Yup.string().required('El Usuario es obligatorio'),
        nombres: Yup.string().required('El Nombre es obligatorio'),
        apellidos: Yup.string().required('Los Apellidos es obligatorio'),
        correo: Yup.string().email('Ingrese un email válido').required('El Correo es obligatorio'),
        telefono: Yup.string().required('El Teléfono es obligatorio'),
        password: Yup.string().required('La contraseña es obligatorio'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), undefined], 'Las contraseñas deben coincidir').required('La confirmación de la contraseña es obligatorio'),
      }),
      onSubmit: async (values) => {
        try {
          dispatch(addLoading());
          const response = await new UseCaseRegister(repository).exec({
            email: values.correo,
            first_name: values.nombres,
            last_name: values.apellidos,
            password: values.password,
            user_type: 1,
            username: values.usuario
          })

          console.log(response);
          toast.success('¡Cuenta de usuario creada!', {
            position: "bottom-right",
            autoClose: 5000,
          });

          navigate("/login")

        } catch (error) {
          const message = AdapterErrorMessage.exec(error as any)
          toast.error(message, {
            position: "bottom-right",
            autoClose: 5000
          });
        } finally {
          dispatch(removeLoading());
        }
      },
    });

  return ({
    formRegister
  })
}