import { Controller } from "./Infraestructure/Controller";
import { View } from "./View/view";

export default function() {
    const controller = Controller();

    return (
        <View {...controller} />
    )
}