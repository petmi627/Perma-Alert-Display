import { Component, OnInit, Input } from '@angular/core';
import {Duty} from '../../../models/duty';
import {DutylistService} from '../../../services/dutylist/dutylist.service';
import {StatsService} from '../../../services/intervention/stats.service';
import {InterventionStats} from '../../../models/intervention-stats';
import {Cis} from '../../../models/cis';
import {ActivatedRoute} from '@angular/router';
import {ToastaConfig, ToastaService} from 'ngx-toasta';
import {InterventionService} from '../../../services/intervention/intervention.service';

declare var $: any;

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
  loadedStats = false;

  constructor(private route: ActivatedRoute,
              private dutyListService: DutylistService,
              private interventionStatsService: StatsService,
              private interventionService: InterventionService,
              private toastaService: ToastaService, private toastaConfig: ToastaConfig) {
      this.toastaConfig.theme = 'bootstrap';
      this.toastaConfig.showClose = false;
      this.toastaConfig.timeout = 12000;
  }

  ngOnInit() {
    const cis_location = this.route.snapshot.paramMap.get('cis');
      this.getDutyList(cis_location);

      $('#' + this.carousel_id).carousel({
          interval: 7500
      });

      setInterval(() => {
          this.getDutyList(cis_location);
      }, 1000 * 60 * 10);

      setInterval(() => {
          this.interventionService.getCurrentIntervention(cis_location).subscribe(intervention => {
              this.interventionStatsService.getStats(cis_location, this.vehicle.name).subscribe(stats => {
                  this.stats = stats;
                  this.loadedStats = true;
              }, error => {
                  this.toastaService.error({
                      title: 'Igendeppes as Scheifgangen',
                      msg: 'Fehler: ' + error.status + ', Mir kennen Äsatz Statistik net aktualiseiren'
                  });
              });
          }, error => {
              if (error.status !== 404) {
                  this.toastaService.error({
                      title: 'Igendeppes as Scheifgangen',
                      msg: 'Fehler: ' + error.status + ', Mir kennen Äsatz Statistik net aktualiseiren'
                  });
              }
          });
      }, 1000 * 60 * 5);


      this.carousel_id = this.vehicle.duty.replace('-', '_') + 'Carousel';
  }

  getDutyList(cis_location) {
      this.dutyListService.getDutyList(cis_location, this.vehicle.name).subscribe(duties => {
          this.dutyList = duties;
      }, error => {
          if (error.status === 404) {
              this.toastaService.error({
                  title: 'Igendeppes as Scheifgangen',
                  msg: 'Momentan as keng Permanence vir ' + this.vehicle.name + ' angedroen!!!'
              });
          } else {
              this.toastaService.error({
                  title: 'Igendeppes as Scheifgangen',
                  msg: 'Fehler: ' + error.status + ', Mir kennen Dengschtlëscht ' + this.vehicle.name
                      + ' net aktualiseiren, Probeier ed mei speit nachengkeier'
              });
          }
      });
  }

}
