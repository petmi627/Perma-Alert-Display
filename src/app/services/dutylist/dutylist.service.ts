import { Injectable } from '@angular/core';
import {Duty} from '../../models/duty';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DutylistService {
  constructor(private http: HttpClient) {}

  getDutyList(cis, vehicle): Observable<Duty[]> {
    let url = environment.api_urls.base_url + 'cis/' + cis + '/duties/' + vehicle;

    return this.http.get<Duty[]>(url);
  }
}
