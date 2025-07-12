import { useEffect } from "react";
import { Controller } from "./Infraestructure/Controller";
import { View } from "./View/view";

export default function() {
    const controller = Controller();

    useEffect(() => {
        controller.init();
    }, [])

    return (
        <View blogs={[]} categories={[]} allTags={[]} {...controller} />
    )
}