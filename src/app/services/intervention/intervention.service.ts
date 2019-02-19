import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Intervention} from '../../models/intervention';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InterventionService {
    constructor(private http: HttpClient) {}

    getCurrentIntervention(cis): Observable<Intervention> {
        let url = environment.api_urls.base_url + 'cis/' + cis + '/intervention';

        return this.http.get<Intervention>(url);
    }
}
