import { Injectable } from '@angular/core';
import {Hospitals} from '../../models/hospitals';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HospitalsService {
  hospitalUrl = 'http://localhost:5000/display/hospitals';

  constructor(private http: HttpClient) {}

  getHospitals(): Observable<Hospitals[]> {
    return this.http.get<Hospitals[]>(this.hospitalUrl);
  }
}
