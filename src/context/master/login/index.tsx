import { Controller } from "./Infraestructure/Controller";
import { ToastContainer } from 'react-toastify';
import { View } from "./View/view";

export default function() {
    const controller = Controller();

    return (
        <>
            <ToastContainer />
            <View {...controller} />
        </>
    )
}