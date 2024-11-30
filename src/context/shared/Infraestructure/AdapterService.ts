import axios, { AxiosRequestConfig } from "axios";

type method = "POST" | "PATCH" | "DELETE" | "GET" | "PUT";

export class AdapterService {
    public async exec<T>(method: method, uri: string, payload: any, config?: AxiosRequestConfig<JSON>){
        const shortMethods = {
            POST: axios.post,
            PATCH: axios.patch,
            DELETE: axios.delete,
            GET: axios.get,
            PUT: axios.put
        };

        if (!shortMethods[method]) throw Error("Método no encontrado")

        return (await shortMethods[method](`${import.meta.env.VITE_BASE_URL}${uri}`, payload, config)).data as T
    }
}