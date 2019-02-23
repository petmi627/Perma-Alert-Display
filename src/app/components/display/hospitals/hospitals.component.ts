import { Component, OnInit } from '@angular/core';
import {Hospitals} from '../../../models/hospitals';
import {HospitalsService} from '../../../services/hospitals/hospitals.service';
import {HeadlineService} from '../../../services/headline/headline.service';
import {ToastaConfig, ToastaService} from 'ngx-toasta';

@Component({
  selector: 'app-hospitals',
  templateUrl: './hospitals.component.html',
  styleUrls: ['./hospitals.component.css']
})
export class HospitalsComponent implements OnInit {
  hospitals: Hospitals[];

  constructor(private hospitalService: HospitalsService,
              private toastaService: ToastaService, private toastaConfig: ToastaConfig) {
      this.toastaConfig.theme = 'bootstrap';
      this.toastaConfig.showClose = false;
      this.toastaConfig.timeout = 12000;
  }

  ngOnInit() {
    this.getHospitals();

    setInterval(() => {
       this.getHospitals();
    }, 60 * 60 * 1000);
  }

  getHospitals() {
      this.hospitalService.getHospitals().subscribe(hospitals => {
          this.hospitals = hospitals;
      }, error => {
          this.toastaService.error({
              title: 'Igendeppes as Scheifgangen',
              msg: 'Fehler: ' + error.status + ', Mir kennen Kliniken net aktualiseiren, Probeier ed mei speit nachengkeier'
          });
      });
  }

}
