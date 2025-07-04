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
import { AxiosError } from "axios";

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
      phone: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      usuario: Yup.string().required('El Usuario es obligatorio').min(5, 'El usuario debe tener al menos 5 caracteres'),
      nombres: Yup.string().required('El Nombre es obligatorio').min(2, 'El nombre debe tener al menos 2 caracteres'),
      apellidos: Yup.string().required('Los Apellidos es obligatorio').min(2, 'Los apellidos deben tener al menos 2 caracteres'),
      correo: Yup.string().email('Ingrese un email válido').required('El Correo es obligatorio'),
      phone: Yup.string().required('El Teléfono es obligatorio'),
      password:
        Yup.string().required('La contraseña es obligatorio').min(8, 'La contraseña debe tener al menos 8 caracteres')
        .matches(/[A-Z]/, 'Debe contener al menos una letra mayúscula')
        .matches(/[a-z]/, 'Debe contener al menos una letra minúscula')
        .matches(/[0-9]/, 'Debe contener al menos un número')
        .matches(/[^A-Za-z0-9]/, 'Debe contener al menos un caracter especial'),
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
          phone: values.phone,
          username: values.usuario
        })

        if (!response.success) {
          toast.error('Ocurrió un error al crear la cuenta de usuario', {
            position: "bottom-right",
            autoClose: 5000,
          });
          return;
        }

        toast.success('¡Cuenta de usuario creada!', {
          position: "bottom-right",
          autoClose: 5000,
        });

        navigate("/login")
      } catch (error) {
        const message = AdapterErrorMessage.exec(error as AxiosError)
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