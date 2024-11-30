import { EntityUsuario } from "../../../../shared/Domain/General/EntityUsuario";

export interface IServiceLoginRequest {
    username: string;
    password: string;
}

export interface IServiceLoginrResponse extends EntityUsuario {

}