import * as Yup from 'yup';
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

import { IPropsScreen } from "../Domain/IPropsScreen";
import { EntityFormForgotPassword } from "../Domain/EntityFormForgotPassword";
import { RepositoryImpl } from './RepositoryImpl';
import { UseCaseForgotPassword } from '../Application/UseCaseForgotPassword';
import { toast } from 'react-toastify';
import { AdapterErrorMessage } from '../../../shared/Infraestructure/AdapterErrorMessage';
import { useDispatch } from 'react-redux';
import { addLoading, removeLoading } from '../../../shared/Infraestructure/SliceGeneric';
import { AxiosError } from 'axios';

export const Controller = (): IPropsScreen => {
  const _repository = new RepositoryImpl();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formForgotPassword = useFormik<EntityFormForgotPassword>({
    initialValues: {
      correo: ''
    },
    validationSchema: Yup.object({
      correo: Yup.string().email('Ingrese un correo válido').required('El correo es obligatorio')
    }),
    onSubmit: async (values) => {
      try {
        dispatch(addLoading());
        await new UseCaseForgotPassword(_repository).exec(values.correo);
        toast.success('Si el correo existe, verifique su bandeja con el cambio de su contraseña');
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

  const redirectLogin = () => {
    navigate('/login')
  }

  return ({
    formForgotPassword,
    redirectLogin
  })
}