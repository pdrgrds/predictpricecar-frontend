export interface IServiceRegisterRequest {
    username: string;
    email: string;
    password: string;
    phone: string;
    first_name: string;
    last_name: string;
}

export interface IServiceRegisterResponse {
    success: boolean;
}