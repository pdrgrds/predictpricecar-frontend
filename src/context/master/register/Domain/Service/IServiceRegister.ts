export interface IServiceRegisterRequest {
    username: string;
    email: string;
    password: string;
    first_name: string;
    last_name: string;
    user_type: number;
}

export interface IServiceRegisterResponse {}