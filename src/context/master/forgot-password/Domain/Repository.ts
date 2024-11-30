export interface Repository {
    postForgotPassword(email: string): Promise<any>;
}