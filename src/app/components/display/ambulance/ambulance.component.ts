import { Component, OnInit, Input } from '@angular/core';
import {Duty} from '../../../models/duty';
import {DutylistService} from '../../../services/dutylist/dutylist.service';
import {StatsService} from '../../../services/intervention/stats.service';
import {InterventionStats} from '../../../models/intervention-stats';

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
  stats: InterventionStats;

  constructor(private dutyListService: DutylistService,
              private interventionStatsService: StatsService) { }

  ngOnInit() {
    this.engine = this.vehicle.replace('-Diekirch', '');
    this.dutyListService.getDutyList(this.engine.toLowerCase()).subscribe(duties => {
      this.dutyList = duties;
    });
    this.interventionStatsService.getStats(this.engine.toLowerCase()).subscribe(stats => {
      this.stats = stats;
    });
    this.carousel_id = this.vehicle.replace('-', '_') + 'Carousel';
  }

}
