import { Injectable } from '@angular/core';
import {Headline} from '../../models/headline';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import {Hospitals} from '../../models/hospitals';

@Injectable({
  providedIn: 'root'
})
export class HeadlineService {
  constructor(private http: HttpClient) {}

  getHeadlines(): Observable<Headline[]> {
      let url = environment.api_urls.base_url + 'headlines';

      return this.http.get<Headline[]>(url);
  }
}
