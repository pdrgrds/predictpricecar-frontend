export interface EntityUsuario {
    token: string
    user: {
        id: number
        username: string
        email: string
        first_name: string
        last_name: string
        user_type: any
    }
}
