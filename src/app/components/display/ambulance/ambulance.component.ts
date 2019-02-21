import { Component, OnInit, Input } from '@angular/core';
import {Duty} from '../../../models/duty';
import {DutylistService} from '../../../services/dutylist/dutylist.service';
import {StatsService} from '../../../services/intervention/stats.service';
import {InterventionStats} from '../../../models/intervention-stats';
import {Cis} from '../../../models/cis';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-ambulance',
  templateUrl: './ambulance.component.html',
  styleUrls: ['./ambulance.component.css']
})
export class AmbulanceComponent implements OnInit {
  @Input() vehicle;
  @Input() dark: boolean;
  engine: string;
  carousel_id: string;
  dutyList: Duty[];
  stats: InterventionStats;
  loadedStats: boolean = false;

  constructor(private route: ActivatedRoute,
              private dutyListService: DutylistService,
              private interventionStatsService: StatsService) { }

  ngOnInit() {
    const cis_location = this.route.snapshot.paramMap.get('cis');
    this.dutyListService.getDutyList(cis_location, this.vehicle.name).subscribe(duties => {
      this.dutyList = duties;
    });
    this.interventionStatsService.getStats(cis_location, this.vehicle.name).subscribe(stats => {
      this.stats = stats;
      this.loadedStats = true;
    });
    this.carousel_id = this.vehicle.duty.replace('-', '_') + 'Carousel';
  }

}
