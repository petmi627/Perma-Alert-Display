import { Component, OnInit } from '@angular/core';
import {Intervention} from '../../../models/intervention';
import {InterventionService} from '../../../services/intervention/intervention.service';
import { DomSanitizer } from '@angular/platform-browser';
import {ActivatedRoute} from '@angular/router';
import {renderFlagCheckIfStmt} from '@angular/compiler/src/render3/view/template';
import {HeadlineService} from '../../../services/headline/headline.service';
import {ToastaConfig, ToastaService} from 'ngx-toasta';

declare var $:any;

@Component({
  selector: 'app-intervention',
  templateUrl: './intervention.component.html',
  styleUrls: ['./intervention.component.css']
})
export class InterventionComponent implements OnInit {
  intervention: Intervention;
  interventionIsShown: boolean = false;

  constructor(private route: ActivatedRoute,
              private interventionService: InterventionService,
              public sanitizer: DomSanitizer,
              private toastaService: ToastaService, private toastaConfig: ToastaConfig) {
      this.toastaConfig.theme = 'bootstrap';
      this.toastaConfig.showClose = false;
      this.toastaConfig.timeout = 12000;
  }

  ngOnInit() {
    setInterval(() => {
        const cis_location = this.route.snapshot.paramMap.get('cis');
        this.interventionService.getCurrentIntervention(cis_location).subscribe(intervention => {
            this.interventionIsShown = true;
            if (this.intervention) {
                if (this.intervention.intervention !== intervention.intervention) {
                    $('#interventionModal').modal('show');
                }
            } else {
                this.intervention = intervention;
                $('#interventionModal').modal('show');
            }
        }, error => {
            this.interventionIsShown = false;
            if (error.status === 404) {
                if (this.intervention) {
                    $('#interventionModal').modal('hide');
                }
            } else {
                this.toastaService.error({
                    title: 'Igendeppes as Scheifgangen',
                    msg: 'Fehler: ' + error.status + ', Mir kennen Äsatz net aktualiseiren'
                });
            }
        });
    }, 10000);
  }

}
