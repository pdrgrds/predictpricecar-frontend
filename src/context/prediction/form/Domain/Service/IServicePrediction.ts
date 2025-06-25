export interface IServicePredictionRequest {
    "year_of_manufacture": number,
    "model": number;
    "version": number;
    "color": number;
    "vehicle_type": number;
    "number_of_doors": number,
    "engine_power": number,
    "mileage": number,
    "oil_change_frequency": number;
    "filter_change_frequency": number;
    "engine_modifications": boolean,
    "critical_replacements": boolean,
    "documentation_in_order": boolean,
    "taxes_in_order": boolean,
    "technical_review_valid": boolean,
    "front_image": null,
    "left_side_image": null,
    "right_side_image": null,
    "rear_image": null,
    "engine_image": null,
    "interior_image": null,
    "seats_image": null,
    "dashboard_image": null,
    "valued_amount": null,
    "mae": null,
    "squared": null,
    "rmse": null,
    "brand": number,
    "fuel_type": number,
    "transmission_type": number,
    "traction_type": number,
    "body_condition": number,
    "chassis_condition": number,
    "brakes_condition": number,
    "suspension_condition": number,
    "exhaust_system_condition": number,
    "air_conditioning_condition": number,
    "electrical_system_condition": number,
    "user"?: number,
    "copied_user"?: number;
    "id"?: number;
}

export const initIServicePredictionRequest: IServicePredictionRequest = {
    year_of_manufacture: 0,
    model: 0,
    version: 0,
    color: 0,
    number_of_doors: 0,
    engine_power: 0,
    mileage: 0,
    oil_change_frequency: 0,
    filter_change_frequency: 0,
    engine_modifications: false,
    critical_replacements: false,
    documentation_in_order: false,
    taxes_in_order: false,
    technical_review_valid: false,
    front_image: null,
    left_side_image: null,
    right_side_image: null,
    rear_image: null,
    engine_image: null,
    interior_image: null,
    seats_image: null,
    dashboard_image: null,
    valued_amount: null,
    mae: null,
    squared: null,
    rmse: null,
    brand: 0,
    fuel_type: 0,
    transmission_type: 0,
    traction_type: 0,
    body_condition: 0,
    chassis_condition: 0,
    brakes_condition: 0,
    suspension_condition: 0,
    exhaust_system_condition: 0,
    air_conditioning_condition: 0,
    electrical_system_condition: 0,
    vehicle_type: 0
}

export interface IServicePredictResponse {
    detalle: IServicePredictionRequest;
    resultado: {
        "valued_amount": number;
        "mae": number;
        "rmse": number;
        "squared": number;
    }
}