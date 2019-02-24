import { Injectable } from '@angular/core';
import {Event} from '../../models/event';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

const httpOptions = {
    headers: new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})
};

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  constructor(private http: HttpClient) {}

  getEvents(cis): Observable<Event[]> {
    let url = environment.api_urls.base_url + 'cis/' + cis + '/calendar';

    return this.http.get<Event[]>(url, httpOptions);
  }
}
