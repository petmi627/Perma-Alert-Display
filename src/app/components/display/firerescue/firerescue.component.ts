import {Component, Input, OnInit, ViewContainerRef} from '@angular/core';
import {Duty} from '../../../models/duty';
import {DutylistService} from '../../../services/dutylist/dutylist.service';
import {InterventionStats} from '../../../models/intervention-stats';
import {StatsService} from '../../../services/intervention/stats.service';
import {ActivatedRoute} from '@angular/router';
import {ToastaService, ToastaConfig, ToastOptions, ToastData} from 'ngx-toasta';

declare var $:any;

@Component({
  selector: 'app-firerescue',
  templateUrl: './firerescue.component.html',
  styleUrls: ['./firerescue.component.css']
})
export class FirerescueComponent implements OnInit {
    @Input() vehicle;
    @Input() dark: boolean;
    dutyList: Duty[];
    duties: Duty[] = [];
    memberEven: Duty[];
    memberOdd: Duty[];
    stats: InterventionStats;
    loadedStats: boolean = false;

    constructor(private route: ActivatedRoute,
                private dutyListService: DutylistService,
                private interventionStatsService: StatsService,
                private toastaService: ToastaService, private toastaConfig: ToastaConfig) {
        this.toastaConfig.theme = 'bootstrap';
        this.toastaConfig.showClose = false;
        this.toastaConfig.timeout = 12000;
    }

    ngOnInit() {
        const cis_location = this.route.snapshot.paramMap.get('cis');
        this.getDutyList(cis_location);

        $('#incsaCarousel').carousel({
            interval: 7500
        });

        setInterval(() => {
            this.getDutyList(cis_location);
        }, 1000 * 60 * 10);

        this.interventionStatsService.getStats(cis_location, this.vehicle.name).subscribe(stats => {
            this.stats = stats;
            this.loadedStats = true;
        });
    }

    getDutyList(cis_location) {
        this.dutyListService.getDutyList(cis_location, this.vehicle.name).subscribe(duties => {
            this.dutyList = duties;

            this.dutyList.forEach((duty, index) => {
                this.memberEven = [];
                this.memberOdd = [];

                duty.members.forEach((member, i) => {
                    if (member.lastName && member.lastName.toString().length > 14) {
                        member.firstName = null;
                    } else if (member.lastName && member.lastName.toString().length > 12) {
                        member.firstName = member.firstName[0] + '.';
                    } else if (member.lastName && member.lastName.toString().length + member.firstName.toString().length > 12
                    ) {
                        member.firstName = member.firstName[0] + '.';
                    }

                    if (i % 2 === 0) {
                        this.memberEven.push(member);
                    } else {
                        this.memberOdd.push(member);
                    }
                });

                duty.members_odd = this.memberOdd;
                duty.members_even = this.memberEven;

                this.duties.push(duty);
            });
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
