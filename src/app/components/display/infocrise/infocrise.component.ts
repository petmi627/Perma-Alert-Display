import {Component, Input, OnInit} from '@angular/core';
import {InfocriseService} from '../../../services/infocrise/infocrise.service';
import {Infocrise} from '../../../models/infocrise';

@Component({
  selector: 'app-infocrise',
  templateUrl: './infocrise.component.html',
  styleUrls: ['./infocrise.component.css']
})
export class InfocriseComponent implements OnInit {
  @Input() dark: boolean;
  infocrise: Infocrise;
  loaded: boolean = false;

  constructor(private infocriseService: InfocriseService) { }

  ngOnInit() {
    this.infocriseService.getCrisis().subscribe((crisis) => {
      this.infocrise = crisis;
      this.loaded = true;
    });

    setInterval(() => {
        this.infocriseService.getCrisis().subscribe(crisis => {
            this.infocrise = crisis;
        });
    }, 60 * 60 * 1800);
  }

}
