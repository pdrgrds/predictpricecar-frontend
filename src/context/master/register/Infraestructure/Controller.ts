import { useFormik } from "formik";
import { EntityFormRegister } from "../Domain/EntityFormRegister";
import * as Yup from 'yup';
import { IPropsScreen } from "../Domain/IPropsScreen";

export const Controller = (): IPropsScreen => {

    const formRegister = useFormik<EntityFormRegister>({
        initialValues: {
          nombres: '',
          apellidos: '',
          correo: '',
          telefono: '',
          password: '',
          confirmPassword: '',
        },
        validationSchema: Yup.object({
          nombres: Yup.string().required('El Nombre es obligatorio'),
          apellidos: Yup.string().required('Los Apellidos es obligatorio'),
          correo: Yup.string().required('El Correo es obligatorio'),
          telefono: Yup.string().required('El Teléfono es obligatorio'),
          password: Yup.string().required('La contraseña es obligatorio'),
          confirmPassword: Yup.string().required('La confirmación de la contraseña es obligatorio'),
        }),
        onSubmit: async (values) => {
          try {
            // const user = await authService.login(values.username, values.password);
            // console.log('Usuario autenticado:', user);
            // Aquí podrías redirigir al usuario o guardar el token
          } catch (error) {
            alert('Error de autenticación');
          }
        },
      });

    return ({
      formRegister
    })
}