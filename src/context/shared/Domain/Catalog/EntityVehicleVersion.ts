export interface EntityVehicleVersion {
    id: number
    modelo: {
        id: number
        marca: {
            id: number
            name: string
            description: string
            company: string
        }
        name: string
        description: string
    }
    name: string
    description: string
}