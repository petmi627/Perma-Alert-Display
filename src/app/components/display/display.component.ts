import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  vehicle = ['AMB1-Diekirch', 'AMB2-Diekirch', 'INCSA'];

  constructor(private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    const cis = this.route.snapshot.paramMap.get('cis');
    console.log(cis);
  }

}
