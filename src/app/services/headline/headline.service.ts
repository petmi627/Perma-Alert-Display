import { Injectable } from '@angular/core';
import {Headline} from '../../models/headline';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeadlineService {
  constructor(private http: HttpClient) {}

  getHeadlines(): Observable<Headline[]> {
      return this.http.get<Headline[]>(environment.api_urls.headline);
  }
}
