import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Instagram} from '../../models/instagram';

@Injectable({
  providedIn: 'root'
})
export class InstagramService {
  instagramUrl = 'http://localhost:5000/display/cis/diekirch/instagram';

  constructor(private http: HttpClient) { }

  getInstagramFeed(): Observable<Instagram[]> {
    return this.http.get<Instagram[]>(this.instagramUrl);
  }
}
