import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {InterventionStats} from '../../models/intervention-stats';
import {environment} from '../../../environments/environment';

const httpOptions = {
    headers: new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})
};

@Injectable({
  providedIn: 'root'
})
export class StatsService {
  constructor(private http: HttpClient) {}

  getStats(cis, vehicle): Observable<InterventionStats> {
      let url = environment.api_urls.base_url + 'cis/' + cis + '/intervention/' + vehicle + '/stats';

      return this.http.get<InterventionStats>(url, httpOptions);
  }
}
