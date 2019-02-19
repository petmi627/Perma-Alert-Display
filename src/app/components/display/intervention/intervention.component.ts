import { Component, OnInit } from '@angular/core';
import {Intervention} from '../../../models/intervention';
import {InterventionService} from '../../../services/intervention/intervention.service';
import { DomSanitizer } from '@angular/platform-browser';
import {ActivatedRoute} from '@angular/router';
import {renderFlagCheckIfStmt} from '@angular/compiler/src/render3/view/template';

declare var $:any;

@Component({
  selector: 'app-intervention',
  templateUrl: './intervention.component.html',
  styleUrls: ['./intervention.component.css']
})
export class InterventionComponent implements OnInit {
  intervention: Intervention;

  constructor(private route: ActivatedRoute,
              private interventionService: InterventionService,
              public sanitizer: DomSanitizer) { }

  ngOnInit() {
    setInterval(() => {
        const cis_location = this.route.snapshot.paramMap.get('cis');
        this.interventionService.getCurrentIntervention(cis_location).subscribe(intervention => {
            if (this.intervention) {
                if (this.intervention.intervention !== intervention.intervention) {
                    $('#interventionModal').modal('show');
                }
            } else {
                this.intervention = intervention;
                $('#interventionModal').modal('show');
            }
        }, error => {
            if (error.status === 404) {
                if (this.intervention) {
                    $('#interventionModal').modal('hide');
                }
            }
        });
    }, 10000);
  }

}
