import { Component, OnInit, Input } from '@angular/core';
import {Duty} from '../../../models/duty';
import {DutylistService} from '../../../services/dutylist/dutylist.service';

@Component({
  selector: 'app-ambulance',
  templateUrl: './ambulance.component.html',
  styleUrls: ['./ambulance.component.css']
})
export class AmbulanceComponent implements OnInit {
  @Input() vehicle: string;
  engine: string;
  carousel_id: string;
  dutyList: Duty[];

  constructor(private dutyListService: DutylistService) { }

  ngOnInit() {
    this.engine = this.vehicle.replace('-Diekirch', '');
    this.dutyList = this.dutyListService.getDutyList(this.engine.toLowerCase());
    this.carousel_id = this.vehicle.replace('-', '_') + 'Carousel';
  }

}
