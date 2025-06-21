export interface EntityVehiclePrediction {
  id: number
  brand: {
    id: number
    name: string
    description: string
    company: string
  }
  model: {
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
  version: {
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
  fuel_type: {
    id: number
    name: string
    description: string
  }
  transmission_type: {
    id: number
    name: string
    description: string
  }
  traction_type: {
    id: number
    name: string
    description: string
  }
  color: {
    id: number
    name: string
    description: string
  }
  vehicle_type: {
    id: number
    name: string
    description: string
  }
  body_condition: {
    id: number
    name: string
    description: string
  }
  chassis_condition: {
    id: number
    name: string
    description: string
  }
  brakes_condition: {
    id: number
    name: string
    description: string
  }
  suspension_condition: {
    id: number
    name: string
    description: string
  }
  exhaust_system_condition: {
    id: number
    name: string
    description: string
  }
  air_conditioning_condition: {
    id: number
    name: string
    description: string
  }
  electrical_system_condition: {
    id: number
    name: string
    description: string
  }
  year_of_manufacture: number
  number_of_doors: number
  engine_power: number
  mileage: number
  oil_change_frequency: number
  filter_change_frequency: number
  engine_modifications: boolean
  critical_replacements: boolean
  documentation_in_order: boolean
  taxes_in_order: boolean
  technical_review_valid: boolean
  front_image: string
  left_side_image: string
  right_side_image: string
  rear_image: string
  engine_image: string
  interior_image: string
  seats_image: string
  dashboard_image: string
  valued_amount: number;
  mae: number;
  squared: number;
  rmse: number;
  created_at: string
  user: number
  copied_user?: string
}
