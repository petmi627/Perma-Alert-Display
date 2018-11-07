import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../../../services/weather/weather.service';
import {Weather} from '../../../models/weather';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weatherForecast: Weather[] = [];
  currentWeather: Weather;
  weatherAlertImage: string = 'http://alarm.meteozentral.lu/images/map/letzebuerg_index.png';

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.getCurrentWeather().subscribe(weather => {
          this.currentWeather = weather;
    });
      this.weatherService.getWeatherForecast().subscribe(forecast => {
          let forecast_list = [];
          forecast.forEach((weather, i) => {
            console.log(weather, i);
            if (i < 3) {
             forecast_list.push(weather);
            }
          });
          this.weatherForecast = forecast_list;
      });

    setInterval(() => {
          this.weatherAlertImage = 'http://alarm.meteozentral.lu/images/map/letzebuerg_index.png';
    }, 600000);
  }

}
