export interface IServiceResponseUpdateContact {
    success: boolean;
    message: string;
    data: {
        first_name: string;
        last_name: string;
        email: string;
        phone: string;
    };
}