import { AxiosError } from "axios";

export class AdapterErrorMessage {

    public static exec(error: AxiosError<any>) {
        // Verificar si el error tiene una respuesta (cuando la solicitud fue hecha)
        if (error.response) {
            // Si la respuesta tiene un mensaje de error
            const message = typeof (error.response.data) !== "string" ? (Object.values(error.response.data)[0] as any)[0] : error.response.statusText || 'Error desconocido'
            return message;
        }
        
        // Si no hay respuesta, verificar otros posibles errores
        if (error.request) {
            return 'No se recibió respuesta del servidor';
        }
        
        // Si el error es algo relacionado con la configuración de la solicitud
        return error.message || 'Error desconocido';
    }
}