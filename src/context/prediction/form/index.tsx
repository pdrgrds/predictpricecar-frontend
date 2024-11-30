import { useEffect } from "react";
import { Controller } from "./Infraestructure/controller";
import { View } from "./View/view";

export default function() {
    const controller = Controller();

    useEffect(() => {
        controller.init();
    }, [])

    return (
        <View {...controller} />
    )
}