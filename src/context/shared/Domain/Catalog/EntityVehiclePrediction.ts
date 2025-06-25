export type EntityVehiclePrediction = {
  id: number
  year_of_manufacture: number
  brand_info: {
    id: number
    name: string
    description: string
    company: string
  }
  model_info: {
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
  version_info: {
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
  fuel_type_info: {
    id: number
    name: string
    description: string
  }
  transmission_type_info: {
    id: number
    name: string
    description: string
  }
  traction_type_info: {
    id: number
    name: string
    description: string
  }
  color_info: {
    id: number
    name: string
    description: string
  }
  vehicle_type_info: {
    id: number
    name: string
    description: string
  }
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
  body_condition_info: {
    id: number
    name: string
    description: string
  }
  chassis_condition_info: {
    id: number
    name: string
    description: string
  }
  brakes_condition_info: {
    id: number
    name: string
    description: string
  }
  suspension_condition_info: {
    id: number
    name: string
    description: string
  }
  exhaust_system_condition_info: {
    id: number
    name: string
    description: string
  }
  air_conditioning_condition_info: {
    id: number
    name: string
    description: string
  }
  electrical_system_condition_info: {
    id: number
    name: string
    description: string
  }
  front_image: string
  left_side_image: string
  right_side_image: string
  rear_image: string
  engine_image: string
  interior_image: string
  seats_image: string
  dashboard_image: string
  valued_amount: any
  mae: any
  squared: any
  rmse: any
  user: number
  copied_user: any
  created_at: string
}
