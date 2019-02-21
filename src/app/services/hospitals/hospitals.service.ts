import { Injectable } from '@angular/core';
import {Hospitals} from '../../models/hospitals';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HospitalsService {
  constructor(private http: HttpClient) {}

  getHospitals(): Observable<Hospitals[]> {
    let url = environment.api_urls.base_url + 'hospitals';

    return this.http.get<Hospitals[]>(url);
  }
}
