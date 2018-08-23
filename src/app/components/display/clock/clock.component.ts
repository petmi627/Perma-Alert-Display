import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {
  clock: any;

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.updateClock();
    }, 1000);
  }

  updateClock() {
      this.clock = new Date();
  }

}
