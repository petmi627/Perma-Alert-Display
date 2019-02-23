import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {CisService} from '../../services/cis/cis.service';
import {Cis} from '../../models/cis';
import {HeadlineService} from '../../services/headline/headline.service';
import {ToastaConfig, ToastaService} from 'ngx-toasta';
import {Weather} from '../../models/weather';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  cis;
  loaded: boolean = false;
  dark: boolean = true;

  constructor(private route: ActivatedRoute,
              private cisService: CisService,
              private location: Location,
              private toastaService: ToastaService, private toastaConfig: ToastaConfig) {
      this.toastaConfig.theme = 'bootstrap';
      this.toastaConfig.showClose = false;
      this.toastaConfig.timeout = 12000;
  }

  ngOnInit() {
    const cis_location = this.route.snapshot.paramMap.get('cis');
    this.cisService.getCis(cis_location).subscribe(cis => {
        console.log(cis);
        this.cis = cis;
        this.loaded = true;
    }, error => {
        this.toastaService.error({
            title: 'Igendeppes as Scheifgangen',
            msg: 'Fehler: ' + error.status + ', Mir kennen PermaAlert net lueden'
        });
    });
  }

  checkTime(weather: Weather) {
      let now = new Date();
      if (now >= weather.sunrise && now <= weather.sunset) {
          this.dark = false;
      } else {
          this.dark = true;
      }
  }

}
