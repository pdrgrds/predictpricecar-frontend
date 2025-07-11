import { useDispatch, useSelector } from "react-redux";
import { IPropsScreen } from "../Domain/IPropsScreen";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../../shared/Infraestructure/AdapterStore";
import { useFormik } from "formik";
import { initFormContact, IFormContact, IFormChangePassword, initFormContactFormChangePassword, IConfigModalPublish, initIConfigModalPublish } from "../Domain/Utils";
import * as Yup from 'yup';
import { useState } from "react";
import { addLoading, changeUser, removeLoading } from "../../../shared/Infraestructure/SliceGeneric";
import { UseCaseUpdateContact } from "../Application/UseCaseUpdateContact";
import { RepositoryImpl } from "./RepositoryImpl";
import { toast } from "react-toastify";
import { AdapterErrorMessage } from "../../../shared/Infraestructure/AdapterErrorMessage";
import { AxiosError } from "axios";
import { EntityUsuario } from "../../../shared/Domain/General/EntityUsuario";
import { KEYS_APP } from "../../../shared/keys";
import { AdapterLocalStorage } from "../../../shared/Infraestructure/AdapterLocalStorage";
import { UseCaseUpdatePassword } from "../Application/UseCaseUpdatePassword";
import { UseCasePredictionsByUser } from "../Application/UseCasePredictionsByUser";
import { IServicePredictionsByUser } from "../Domain/Service/IServicePredictionsByUser";
import { UseCaseLoadOptionsBlog } from "../Application/UseCaseLoadOptionsBlog";
import { IServiceBlogRequest } from "../Domain/Service/IServiceBlog";
import { message } from "antd";

export const Controller = (): IPropsScreen => {
    const { user } = useSelector((rootState: RootState) => rootState.generic);
    const [dataTableVehicles, setDataTableVehicles] = useState<IServicePredictionsByUser[]>([])
    const [selectedTab, setSelectedTab] = useState("1");
    const [configPublish, setConfigPublish] = useState<IConfigModalPublish>(initIConfigModalPublish);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const repository = new RepositoryImpl();

    const init = async () => {
        formContact.setValues({
            nombres: user.user.first_name,
            apellidos: user.user.last_name,
            correo: user.user.email,
            phone: user.user.phone
        })

        formChangePassword.setValues(initFormContactFormChangePassword)

        const result: IServicePredictionsByUser[] = await new UseCasePredictionsByUser(repository).exec().catch(() => []);
        setDataTableVehicles(result);
    }

    const formContact = useFormik<IFormContact>({
        initialValues: initFormContact,
        validationSchema: Yup.object({
            nombres: Yup.string().required('El Nombre es obligatorio').min(2, 'El nombre debe tener al menos 2 caracteres'),
            apellidos: Yup.string().required('Los Apellidos es obligatorio').min(2, 'Los apellidos deben tener al menos 2 caracteres'),
            correo: Yup.string().email('Ingrese un email válido').required('El Correo es obligatorio'),
            phone: Yup.string().required('El Teléfono es obligatorio'),
        }),
        onSubmit: async (values) => {
            try {
                dispatch(addLoading());
                const response = await new UseCaseUpdateContact(repository).exec(values)

                if (!response.success) {
                    toast.error('Ocurrió un error al editar la información', {
                        position: "bottom-right",
                        autoClose: 5000,
                    });
                    return;
                }

                const template: EntityUsuario = {
                    ...user,
                    user: {
                        ...user.user,
                        first_name: response.data.first_name,
                        last_name: response.data.last_name,
                        email: response.data.email,
                        phone: response.data.phone
                    }
                }

                dispatch(changeUser(template))
                AdapterLocalStorage.set(KEYS_APP.user, JSON.stringify(template));

                toast.success('Datos actualizados correctamente.', {
                    position: "bottom-right",
                    autoClose: 5000,
                });
            } catch (error) {
                const message = AdapterErrorMessage.exec(error as AxiosError)
                toast.error(message, {
                    position: "bottom-right",
                    autoClose: 5000
                });
            } finally {
                dispatch(removeLoading());
            }
        }
    })

    const formChangePassword = useFormik<IFormChangePassword>({
        initialValues: initFormContactFormChangePassword,
        validationSchema: Yup.object({
            currentPassword: Yup.string().required('Ingrese la contraseña actual'),
            newPassword:
                Yup.string().required('La nueva contraseña es obligatorio').min(8, 'La nueva contraseña debe tener al menos 8 caracteres')
                    .matches(/[A-Z]/, 'Debe contener al menos una letra mayúscula')
                    .matches(/[a-z]/, 'Debe contener al menos una letra minúscula')
                    .matches(/[0-9]/, 'Debe contener al menos un número')
                    .matches(/[^A-Za-z0-9]/, 'Debe contener al menos un caracter especial'),
            confirmNewPassword: Yup.string().oneOf([Yup.ref('newPassword'), undefined], 'Las contraseñas deben coincidir').required('La confirmación de la contraseña es obligatorio'),
        }),
        onSubmit: async (values) => {
            try {
                dispatch(addLoading());
                const response = await new UseCaseUpdatePassword(repository).exec(values)

                if (!response.success) {
                    toast.error(response.message || 'Ocurrió un error al actualizar la contraseña', {
                        position: "bottom-right",
                        autoClose: 5000,
                    });
                    return;
                }

                toast.success(response.message, {
                    position: "bottom-right",
                    autoClose: 5000,
                });
            } catch (error) {
                const message = AdapterErrorMessage.exec(error as AxiosError)
                toast.error(message, {
                    position: "bottom-right",
                    autoClose: 5000
                });
            } finally {
                dispatch(removeLoading());
            }
        }
    })

    const onChangeSelectTab = (newTab: string) => setSelectedTab(newTab)

    const redirectPage = (url: string) => {
        navigate(url)
    }

    const onLogout = () => {
        AdapterLocalStorage.delete(KEYS_APP.user);
        dispatch(changeUser({ token: '', user: { email: '', first_name: '', id: 0, last_name: '', is_staff: false, username: '', phone: '', date_joined: '' } }))
        redirectPage('/')
    }

    // ---------------- Modal Publish
    const openModalPublish = async (data: IServicePredictionsByUser) => {
        let payload: Partial<IConfigModalPublish> = {};
        if (configPublish.options.category.length === 0 || configPublish.options.tag.length === 0) {
            try {
                dispatch(addLoading());
                const [tagOptions, categoryOptions] = await new UseCaseLoadOptionsBlog(repository).exec();
                payload = {
                    ...payload,
                    options: {
                        category: categoryOptions,
                        tag: tagOptions
                    }
                }
            } catch (err) {
                console.log(err)
            } finally {
                dispatch(removeLoading());
            }
        }

        if (data.idPublish) {
            try {
                dispatch(addLoading());
                const result = await repository.getBlogById(`${data.idPublish}`);
                if (!result) return message.error('No se pudo encontrar el blog, inténtelo mas tarde');
                setConfigPublish((prev) => ({
                    ...prev,
                    ...payload,
                    show: true,
                    form: result
                }))
            } catch(err) {
                console.log(err);
            } finally {
                dispatch(removeLoading());
            }
            return;
        }

        setConfigPublish((prev) => ({
            ...prev,
            ...payload,
            show: true,
            form: {
                id: 0,
                prediction: 0
            }
        }))
    }

    const closeModalPublish = () => {
        setConfigPublish((prev) => ({
            ...prev,
            show: false,
            form: {
                id: 0,
                idPrediction: 0
            }
        }))
    }

    const onSubmitSaveBlog = async (values: IServiceBlogRequest) => {
        const formData = new FormData();
        formData.append("title", values.title);
        formData.append("slug", values.slug);
        formData.append("excerpt", values.excerpt || '');
        formData.append("content", values.content);
        formData.append("category", String(values.category));
        formData.append("published", String(values.published));
        formData.append("is_featured", "0");
        if (values.published_at) formData.append("published_at", values.published_at);
        if (values.prediction) formData.append("prediction", String(values.prediction));
        if (values.cover_image) formData.append("cover_image", values.cover_image);
        if (values.tags && values.tags.length > 0) values.tags.forEach(tagId => formData.append("tags", String(tagId)));

        try {
            dispatch(addLoading());
            if (values.id) {
                await repository.editBlog(values.id, formData);
            } else {
                await repository.saveBlog(formData);
            }
            const result: IServicePredictionsByUser[] = await new UseCasePredictionsByUser(repository).exec().catch(() => []);
            setDataTableVehicles(result);
            return true;
        } catch (err) {
            console.log(err)
            return false;
        } finally {
            dispatch(removeLoading());
        }
    }

    return ({
        init,
        onLogout,
        dataTableVehicles,
        user: user.user,
        formContact,
        formChangePassword,
        redirectPage,

        selectedTab,
        onChangeSelectTab,

        configPublish,
        openModalPublish,
        closeModalPublish,
        onSubmitSaveBlog,
    })
}