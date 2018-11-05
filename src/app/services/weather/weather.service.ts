import { Injectable } from '@angular/core';
import {Weather} from '../../models/weather';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  currentWeatherUrl: string = 'http://localhost:5000/display/cis/diekirch/weather';

  weatherForecast: Weather[];

  constructor(private http: HttpClient) {

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

  getCurrentWeather(): Observable<Weather> {
    return this.http.get<Weather>(this.currentWeatherUrl);
  }

  getWeatherForecast() {
    return this.weatherForecast;
  }
}
