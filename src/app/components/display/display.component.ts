import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {CisService} from '../../services/cis/cis.service';
import {Cis} from '../../models/cis';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  cis;
  loaded: boolean = false;

  constructor(private route: ActivatedRoute,
              private cisService: CisService,
              private location: Location) { }

  ngOnInit() {
    const cis_location = this.route.snapshot.paramMap.get('cis');
    this.cisService.getCis(cis_location).subscribe(cis => {
        console.log(cis);
        this.cis = cis;
        this.loaded = true;
    });
  }

}
