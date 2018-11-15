import { Injectable } from '@angular/core';
import {Event} from '../../models/event';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  url = 'http://localhost:5000/display/cis/diekirch/calendar';

  constructor(private http: HttpClient) {}

  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.url);
  }
}
