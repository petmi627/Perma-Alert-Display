import { Injectable } from '@angular/core';
import {Weather} from '../../models/weather';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  currentWeatherUrl: string = 'http://localhost:5000/display/cis/diekirch/weather';
  forecastUrl: string = 'http://localhost:5000/display/cis/diekirch/weather/forecast';

  constructor(private http: HttpClient) {}

  getCurrentWeather(): Observable<Weather> {
    return this.http.get<Weather>(this.currentWeatherUrl);
  }

  getWeatherForecast(): Observable<Weather[]> {
      return this.http.get<Weather[]>(this.forecastUrl);
  }
}
