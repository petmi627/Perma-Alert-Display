import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Intervention} from '../../models/intervention';

@Injectable({
  providedIn: 'root'
})
export class InterventionService {
    interventionUrl = 'http://localhost:5000/display/cis/diekirch/intervention';

    constructor(private http: HttpClient) {}

    getCurrentIntervention(): Observable<Intervention> {
        return this.http.get<Intervention>(this.interventionUrl);
    }
}
