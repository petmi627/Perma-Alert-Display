import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {InterventionStats} from '../../models/intervention-stats';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StatsService {
  constructor(private http: HttpClient) {}

  getStats(cis, vehicle): Observable<InterventionStats> {
      let url = environment.api_urls.base_url + 'cis/' + cis + '/intervention/' + vehicle + '/stats';

      return this.http.get<InterventionStats>(url);
  }
}
