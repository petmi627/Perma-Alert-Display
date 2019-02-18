import { Component, OnInit } from '@angular/core';
import {Intervention} from '../../../models/intervention';
import {InterventionService} from '../../../services/intervention/intervention.service';
import { DomSanitizer } from '@angular/platform-browser';

declare var $:any;

@Component({
  selector: 'app-intervention',
  templateUrl: './intervention.component.html',
  styleUrls: ['./intervention.component.css']
})
export class InterventionComponent implements OnInit {
  intervention: Intervention;

  constructor(private interventionService: InterventionService,
              public sanitizer: DomSanitizer) { }

  ngOnInit() {
    setInterval(() => {
        this.interventionService.getCurrentIntervention().subscribe(intervention => {
            console.log(intervention);
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
                console.log('No Intervention there to display');
            }
        });
    }, 10000);
  }

}
