/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosRequestConfig } from "axios";
import { AdapterLocalStorage } from "./AdapterLocalStorage";
import { KEYS_APP } from "../keys";

type Method = "POST" | "PATCH" | "DELETE" | "GET" | "PUT";
type Auth = "Bearer" | "NoAuth" | "";

export class AdapterService {
  private get baseUrl(): string {
    return import.meta.env.VITE_BASE_URL || "";
  }

  private getAuthHeader(auth?: Auth): Record<string, string> {
    if (auth === "Bearer") {
      const token = JSON.parse(AdapterLocalStorage.get(KEYS_APP.user)?.[0] || "null")?.token;
      return token ? { Authorization: `Bearer ${token}` } : {};
    }
    return {};
  }

  public async exec<T>(
    method: Method,
    uri: string,
    payload?: any,
    auth?: Auth,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const url = `${this.baseUrl}${uri}`;
    const headers = { ...config?.headers, ...this.getAuthHeader(auth) };
    const finalConfig = { ...config, headers };

    try {
      const response =
        method === "GET" || method === "DELETE"
          ? await axios[method.toLowerCase() as "get" | "delete"](url, finalConfig)
          : await axios[method.toLowerCase() as "post" | "put" | "patch"](url, payload, finalConfig);

      return response.data as T;
    } catch (error) {
      const message = axios.isAxiosError(error)
        ? error.response?.data?.message ||
          error.response?.data?.error ||
          error.response?.data?.detail ||
          JSON.stringify(error.response?.data) ||
          error.message
        : "Error inesperado en la petición";
      throw new Error(message);
    }
  }
}
