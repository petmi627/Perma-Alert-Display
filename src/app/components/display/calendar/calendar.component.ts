import { Component, OnInit } from '@angular/core';
import {CalendarService} from '../../../services/event/calendar.service';
import {Event} from '../../../models/event';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  events: Event[];

  constructor(private calendarService: CalendarService) { }

  ngOnInit() {
    this.events = this.calendarService.getEvents();
  }

}
