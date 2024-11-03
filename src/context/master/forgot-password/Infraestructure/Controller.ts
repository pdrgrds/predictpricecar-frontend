import * as Yup from 'yup';
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

import { IPropsScreen } from "../Domain/IPropsScreen";
import { EntityFormForgotPassword } from "../Domain/EntityFormForgotPassword";

export const Controller = (): IPropsScreen => {
  const navigate = useNavigate()

  const formForgotPassword = useFormik<EntityFormForgotPassword>({
    initialValues: {
      correo: ''
    },
    validationSchema: Yup.object({
      correo: Yup.string().required('El correo es obligatorio')
    }),
    onSubmit: async () => {
      try {
      } catch (error) {
        alert('Error de autenticación');
      }
    },
  });

  const redirectLogin = () => {
    navigate('/login')
  }

  return ({
    formForgotPassword,
    redirectLogin
  })
}