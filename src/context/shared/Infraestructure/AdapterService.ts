import axios, { AxiosRequestConfig } from "axios";
import { AdapterLocalStorage } from "./AdapterLocalStorage";
import { KEYS_APP } from "../keys";

type method = "POST" | "PATCH" | "DELETE" | "GET" | "PUT";
type auth = "Bearer" | "NoAuth" | "";

export class AdapterService {
    public async exec<T>(method: method, uri: string, payload: any, auth?: auth, config?: AxiosRequestConfig<JSON>){
        const shortMethods = {
            POST: axios.post,
            PATCH: axios.patch,
            DELETE: axios.delete,
            GET: axios.get,
            PUT: axios.put
        };

        if (!shortMethods[method]) throw Error("Método no encontrado")

        let configHeader: AxiosRequestConfig = config || {};
        if (auth === 'Bearer') {
            const token: string = JSON.parse(AdapterLocalStorage.get(KEYS_APP.user)[0] as any)?.token;
            configHeader = { ...config, headers: { ...config?.headers, Authorization: `Bearer ${token}` }  }
        }

        if (method === 'GET') {
            return (await shortMethods[method](`${import.meta.env.VITE_BASE_URL}${uri}`, configHeader)).data as T
        }

        return (await shortMethods[method](`${import.meta.env.VITE_BASE_URL}${uri}`, payload, configHeader)).data as T
    }
}