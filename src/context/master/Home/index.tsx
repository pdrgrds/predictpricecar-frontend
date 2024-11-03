import { Controller } from "./Infraestructure/Controller";
import { View } from "./View/View";

export default function() {
    const controller = Controller();

    return (
        <View {...controller} />
    )
}