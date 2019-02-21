import { Component, OnInit } from '@angular/core';
import {CalendarService} from '../../../services/event/calendar.service';
import {Event} from '../../../models/event';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  event_list: Event[];

  constructor(private route: ActivatedRoute,
              private calendarService: CalendarService) { }

  ngOnInit() {
    const cis_location = this.route.snapshot.paramMap.get('cis');
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
    });
  }

}
