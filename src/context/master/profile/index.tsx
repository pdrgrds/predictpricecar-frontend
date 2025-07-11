import { useEffect } from "react";
import { Controller } from "./Infraestructure/Controller";
import { ToastContainer } from 'react-toastify';
import { View } from "./View/view";
import { ModalPublishBlog } from "./View/modal/CreatePublish";

export default function() {
    const controller = Controller();

    useEffect(() => {
        controller.init();
    }, [controller.user])

    return (
        <>
            <ToastContainer />
            <View {...controller} />
            <ModalPublishBlog {...controller} />
        </>
    )
}