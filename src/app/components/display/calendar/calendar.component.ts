import { Component, OnInit } from '@angular/core';
import {CalendarService} from '../../../services/event/calendar.service';
import {Event} from '../../../models/event';
import {ActivatedRoute} from '@angular/router';
import {StatsService} from '../../../services/intervention/stats.service';
import {ToastaConfig, ToastaService} from 'ngx-toasta';

declare var $:any;

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  event_list: Event[];

  constructor(private route: ActivatedRoute,
              private calendarService: CalendarService,
              private toastaService: ToastaService, private toastaConfig: ToastaConfig) {
      this.toastaConfig.theme = 'bootstrap';
      this.toastaConfig.showClose = false;
      this.toastaConfig.timeout = 12000;
  }

  ngOnInit() {
    const cis_location = this.route.snapshot.paramMap.get('cis');
    this.getCalendar(cis_location);

      $('#calendar').carousel({
          interval: 7500
      });

    setInterval(() => {
        this.getCalendar(cis_location);
    }, 1000 * 60 * 10);
  }

  getCalendar(cis_location) {
      this.calendarService.getEvents(cis_location).subscribe(events => {
          let event_list = [];
          let list = [];
          events.forEach((event, i) => {
              if (i % 3 === 0 && i !== 0) {
                  event_list.push(list);
                  list = [];
                  list.push(event);
              } else {
                  list.push(event);
              }
          });
          event_list.push(list);
          this.event_list = event_list;
      }, error => {
          this.toastaService.error({
              title: 'Igendeppes as Scheifgangen',
              msg: 'Fehler: ' + error.status + ', Mir kennen den Kalenner net aktualiseiren, Probeier ed mei speit nachengkeier'
           });
      });
  }

}
