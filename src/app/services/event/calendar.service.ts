import { Injectable } from '@angular/core';
import {Event} from '../../models/event';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  events: Event[];

  constructor() {
    this.events = [
        {
          name: 'Test',
          start: new Date(2018, 8, 25, 15, 0),
          end: new Date(2018, 8, 25, 17, 0),
          location: 'Centre d\'Incendie et de Secours Diekirch',
          description: '',
        },
        {
            name: 'Ambulanz Cours',
            start: new Date(2018, 8, 27, 20, 0),
            end: new Date(2018, 8, 27, 22, 0),
            location: 'Centre d\'Incendie et de Secours Diekirch',
            description: '',
        },
        {
            name: 'Samsdeg Treffen',
            start: new Date(2018, 8, 29, 14, 0),
            end: new Date(2018, 8, 29, 18, 0),
            location: 'Centre d\'Incendie et de Secours Diekirch',
            description: '',
        }
    ];
  }

  getEvents() {
    return this.events;
  }
}
