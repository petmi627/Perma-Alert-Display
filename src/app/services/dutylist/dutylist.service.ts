import { Injectable } from '@angular/core';
import {Duty} from '../../models/duty';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DutylistService {
  duty_list_url_incsa: string = 'http://localhost:5000/display/cis/diekirch/duties/INCSA-DIEKIRCH';
  duty_list_url_am1: string = 'http://localhost:5000/display/cis/diekirch/duties/AMB1-DIEKIRCH';
  duty_list_url_am2: string = 'http://localhost:5000/display/cis/diekirch/duties/AMB2-DIEKIRCH';

  constructor(private http: HttpClient) {}

  getDutyList(vehicle): Observable<Duty[]> {
    if (vehicle === 'amb1') {
        return this.http.get<Duty[]>(this.duty_list_url_am1);
    }

    if (vehicle === 'amb2') {
        return this.http.get<Duty[]>(this.duty_list_url_am2);
    }

    return this.http.get<Duty[]>(this.duty_list_url_incsa);
  }
}
