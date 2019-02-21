import { Injectable } from '@angular/core';
import {Weather} from '../../models/weather';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getCurrentWeather(cis): Observable<Weather> {
    let url = environment.api_urls.base_url + 'cis/' + cis + '/weather';

    return this.http.get<Weather>(url);
  }

  getWeatherForecast(cis): Observable<Weather[]> {
      let url = environment.api_urls.base_url + 'cis/' + cis + '/weather/forecast';

      return this.http.get<Weather[]>(url);
  }
}
