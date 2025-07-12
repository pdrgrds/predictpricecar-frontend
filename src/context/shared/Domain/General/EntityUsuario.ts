export interface EntityUsuario {
    token: string
    user: {
        id: number
        username: string
        email: string
        first_name: string
        last_name: string
        is_staff: boolean
        phone: string;
        date_joined: string;
        permitir_notifications: boolean;
    }
}
