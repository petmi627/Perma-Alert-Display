import { Component, OnInit } from '@angular/core';
import {Hospitals} from '../../../models/hospitals';
import {HospitalsService} from '../../../services/hospitals/hospitals.service';

@Component({
  selector: 'app-hospitals',
  templateUrl: './hospitals.component.html',
  styleUrls: ['./hospitals.component.css']
})
export class HospitalsComponent implements OnInit {
  hospitals: Hospitals[];

  constructor(private hospitalService: HospitalsService) { }

  ngOnInit() {
    this.hospitalService.getHospitals().subscribe(hospitals => {
        this.hospitals = hospitals;
    });

    setInterval(() => {
       this.hospitalService.getHospitals().subscribe(hospitals => {
          this.hospitals = hospitals;
       });
    }, 60 * 60 * 1000);
  }

}
