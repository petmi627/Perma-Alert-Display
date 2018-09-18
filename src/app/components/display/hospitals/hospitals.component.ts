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
    this.hospitals = this.hospitalService.getHospitals();
  }

}
