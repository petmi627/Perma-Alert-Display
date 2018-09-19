import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../../../services/weather/weather.service';
import {Weather} from '../../../models/weather';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weatherForecast: Weather[];
  currentWeather: Weather;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherForecast = this.weatherService.getWeatherForecast();
    this.currentWeather = this.weatherService.getCurrentWeather();
  }

}
