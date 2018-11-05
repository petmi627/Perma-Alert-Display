export interface Weather {
    temperature: number;
    pressure?: number;
    humidity?: number;
    temp_min?: number;
    temp_max?: number;
    weather: string;
    weather_icon?: string;
    weather_description?: string;
    wind_speed?: number;
    location: string;
    country: string;
    datetime?: any;
}
