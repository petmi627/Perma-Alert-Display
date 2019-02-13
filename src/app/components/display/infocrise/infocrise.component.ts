import { Component, OnInit } from '@angular/core';
import {InfocriseService} from '../../../services/infocrise/infocrise.service';
import {Infocrise} from '../../../models/infocrise';

@Component({
  selector: 'app-infocrise',
  templateUrl: './infocrise.component.html',
  styleUrls: ['./infocrise.component.css']
})
export class InfocriseComponent implements OnInit {
  infocrise: Infocrise;

  constructor(private infocriseService: InfocriseService) { }

  ngOnInit() {
    this.infocriseService.getCrisis().subscribe((crisis) => {
      this.infocrise = crisis;
    });

    setInterval(() => {
        this.infocriseService.getCrisis().subscribe(crisis => {
            this.infocrise = crisis;
        });
    }, 60 * 60 * 1800);
  }

}
