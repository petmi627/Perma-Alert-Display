import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {InterventionStats} from '../../models/intervention-stats';

@Injectable({
  providedIn: 'root'
})
export class StatsService {
  url_incsa: string = 'http://localhost:5000/display/cis/diekirch/intervention/INCSA-DIEKIRCH/stats';
  url_am1: string = 'http://localhost:5000/display/cis/diekirch/intervention/AMB1-DIEKIRCH/stats';
  url_am2: string = 'http://localhost:5000/display/cis/diekirch/intervention/AMB2-DIEKIRCH/stats';

  constructor(private http: HttpClient) {}

  getStats(vehicle): Observable<InterventionStats> {
      if (vehicle === 'amb1') {
          return this.http.get<InterventionStats>(this.url_am1);
      }

      if (vehicle === 'amb2') {
          return this.http.get<InterventionStats>(this.url_am2);
      }

      return this.http.get<InterventionStats>(this.url_incsa);
  }
}
