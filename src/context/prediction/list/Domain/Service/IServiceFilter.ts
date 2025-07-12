export interface IServiceFilterRequest {
  anio?: number;
  brand?: number;
  color?: number;
  combustible?: number[]
  mileage?: number[]
  precio?: number[];
  transmision?: number;
}

export interface IServiceFilterResponse {
  brand: Array<{
    id: number
    name: string
  }>
  amount_price: Array<number>
  mileage: Array<number>
  year_vehicle: Array<number>
  fuel_type: Array<{
    id: number
    name: string
  }>
  transmission_type: Array<{
    id: number
    name: string
  }>
  color: Array<{
    id: number
    name: string
  }>
}

export const initIServiceFilterResponse: IServiceFilterResponse = {
  brand: [],
  amount_price: [],
  mileage: [],
  year_vehicle: [],
  fuel_type: [],
  transmission_type: [],
  color: []
}