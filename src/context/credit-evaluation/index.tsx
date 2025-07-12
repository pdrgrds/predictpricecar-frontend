import { useEffect } from "react";
import { Controller } from "./Infraestructure/Controller";
import { View } from "./View/view";
import { ToastContainer } from "react-toastify";

export default function Main() {
    const controller = Controller();

    useEffect(() => {
        controller.onInit();
        return controller.destroy();
    }, [])

    return (
        <>
            <ToastContainer />
            <View />
        </>
    )
}