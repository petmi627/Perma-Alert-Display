import {Component, Input, OnInit} from '@angular/core';
import {InfocriseService} from '../../../services/infocrise/infocrise.service';
import {Infocrise} from '../../../models/infocrise';
import {HeadlineService} from '../../../services/headline/headline.service';
import {ToastaConfig, ToastaService} from 'ngx-toasta';

@Component({
  selector: 'app-infocrise',
  templateUrl: './infocrise.component.html',
  styleUrls: ['./infocrise.component.css']
})
export class InfocriseComponent implements OnInit {
  @Input() dark: boolean;
  infocrise: Infocrise;
  loaded: boolean = false;

  constructor(private infocriseService: InfocriseService,
              private toastaService: ToastaService, private toastaConfig: ToastaConfig) {
      this.toastaConfig.theme = 'bootstrap';
      this.toastaConfig.showClose = false;
      this.toastaConfig.timeout = 12000;
  }

  ngOnInit() {
    this.getCrisis();

    setInterval(() => {
        this.getCrisis();
    }, 1000 * 60 * 60);
  }

  getCrisis() {
      this.infocriseService.getCrisis().subscribe((crisis) => {
          this.infocrise = crisis;
          this.loaded = true;
      }, error => {
          this.toastaService.error({
              title: 'Igendeppes as Scheifgangen',
              msg: 'Fehler: ' + error.status + ', Mir kennen Infocrise net aktualiseiren, Probeier ed mei speit nachengkeier'
          });
      });
  }

}
