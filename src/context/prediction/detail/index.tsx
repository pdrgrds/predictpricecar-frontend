import { useEffect } from "react";
import { Controller } from "./Infraestructure/Controller";
import { View } from "./View/view";
import { ToastContainer } from "react-toastify";

export default function() {
    const controller = Controller();

    useEffect(() => {
        controller.init();
    }, [])

    return (
        <>
            <ToastContainer />
            <View {...controller} />
        </>
    )
}