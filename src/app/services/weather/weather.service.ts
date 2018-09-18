import { Injectable } from '@angular/core';
import {Weather} from '../../models/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  weatherForecast: Weather[];
  currentWeather: Weather;

  constructor() {
    this.currentWeather = {
        temperature: 30,
        weather: 'sunny',
        location: 'Diekirch',
        country: 'LU',
        datetime: new Date()
    };

    this.weatherForecast = [
        {
            temperature: 27,
            weather: 'cloudy',
            location: 'Diekirch',
            country: 'LU',
            datetime: new Date(2018,9, 19)
        },
        {
            temperature: 24,
            weather: 'rain',
            location: 'Diekirch',
            country: 'LU',
            datetime: new Date(2018,9, 20)
        },
        {
            temperature: 21,
            weather: 'thunderstorm',
            location: 'Diekirch',
            country: 'LU',
            datetime: new Date(2018,9, 21)
        },
    ];
  }

  getCurrentWeather() {
    return this.currentWeather;
  }

  getWeatherForecast() {
    return this.weatherForecast;
  }
}
