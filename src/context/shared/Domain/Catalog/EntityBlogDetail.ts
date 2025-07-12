export type EntityBlogDetail = {
  id: number
  category: {
    id: number
    name: string
    description: string
    created_at: string
  }
  tags: Array<{
    id: number
    name: string
    created_at: string
  }>
  author: {
    id: number
    username: string
    email: string
    first_name: string
    last_name: string
    phone: string
    is_active: boolean
    is_staff: boolean
    date_joined: string
  }
  prediction: {
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
    valued_amount: number
    mae: number
    squared: number
    rmse: number
    user: number
    copied_user?: number
    created_at: string
  }
  title: string
  slug: string
  excerpt: string
  content: string
  cover_image: string
  created_at: string
  updated_at: string
  published: boolean
  published_at?: string
  views_count: number
  is_featured: boolean
}
