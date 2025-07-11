import * as Yup from 'yup';
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

import { IPropsScreen } from "../Domain/IPropsScreen";
import { EntityFormLogin } from "../Domain/EntityFormLogin";
import { RepositoryImpl } from './RepositoryImpl';
import { UseCaseLogin } from '../Application/UseCaseLogin';
import { AdapterErrorMessage } from '../../../shared/Infraestructure/AdapterErrorMessage';
import { toast } from 'react-toastify';
import { AdapterLocalStorage } from '../../../shared/Infraestructure/AdapterLocalStorage';
import { KEYS_APP } from '../../../shared/keys';
import { useDispatch } from 'react-redux';
import { addLoading, changeUser, removeLoading } from '../../../shared/Infraestructure/SliceGeneric';

export const Controller = (): IPropsScreen => {
  const navigate = useNavigate()
  const repository = new RepositoryImpl();
  const dispatch = useDispatch();

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
        dispatch(addLoading());
        const user = await new UseCaseLogin(repository).exec({
          password: values.password,
          username: values.username
        });
        AdapterLocalStorage.set(KEYS_APP.user, JSON.stringify(user));
        dispatch(changeUser(user));
        navigate('/')

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

  const redirectRegister = () => {
    navigate('/register')
  }

  return ({
    formLogin,
    redirectRegister
  })
}