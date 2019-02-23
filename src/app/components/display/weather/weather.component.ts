import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../../../services/weather/weather.service';
import {Weather} from '../../../models/weather';
import {ActivatedRoute} from '@angular/router';
import {HeadlineService} from '../../../services/headline/headline.service';
import {ToastaConfig, ToastaService} from 'ngx-toasta';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weatherForecast: Weather[] = [];
  currentWeather: Weather;
  weatherAlertImage: string = 'http://alarm.meteozentral.lu/images/map/letzebuerg_index.png';

  loadedCurrentWeather = false;
  loadedForecast = false;

  constructor(private route: ActivatedRoute,
              private weatherService: WeatherService,
              private toastaService: ToastaService, private toastaConfig: ToastaConfig) {
      this.toastaConfig.theme = 'bootstrap';
      this.toastaConfig.showClose = false;
      this.toastaConfig.timeout = 12000;
  }

  ngOnInit() {
    this.getWeather();

      setInterval(() => {
          this.getWeather();
      }, 1000 * 60 * 30);

    setInterval(() => {
          this.weatherAlertImage = 'http://alarm.meteozentral.lu/images/map/letzebuerg_index.png';
    }, 600000);
  }

  getWeather() {
      const cis_location = this.route.snapshot.paramMap.get('cis');
      this.weatherService.getCurrentWeather(cis_location).subscribe(weather => {
          this.currentWeather = weather;
          this.loadedCurrentWeather = true;
      });
      this.weatherService.getWeatherForecast(cis_location).subscribe(forecast => {
          let forecast_list = [];
          forecast.forEach((weather, i) => {
              if (i < 3) {
                  forecast_list.push(weather);
              }
          });
          this.weatherForecast = forecast_list;
          this.loadedForecast = true;
      }, error => {
          this.toastaService.error({
              title: 'Igendeppes as Scheifgangen',
              msg: 'Fehler: ' + error.status + ', Mir kennen Wieder net aktualiseiren'
          });
      });
  }

}
