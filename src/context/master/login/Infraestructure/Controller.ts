import * as Yup from 'yup';
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

import { IPropsScreen } from "../Domain/IPropsScreen";
import { EntityFormLogin } from "../Domain/EntityFormLogin";

export const Controller = (): IPropsScreen => {
  const navigate = useNavigate()

  const formLogin = useFormik<EntityFormLogin>({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string().required('El usuario es obligatorio'),
      password: Yup.string().required('La contraseña es obligatoria'),
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

  const redirectRegister = () => {
    console.log('register')
    navigate('/register')
  }

  return ({
    formLogin,
    redirectRegister
  })
}