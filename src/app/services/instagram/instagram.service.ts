import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Instagram} from '../../models/instagram';
import {environment} from '../../../environments/environment';

const httpOptions = {
    headers: new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})
};

@Injectable({
  providedIn: 'root'
})
export class InstagramService {
  constructor(private http: HttpClient) { }

  getInstagramFeed(cis): Observable<Instagram[]> {
      let url = environment.api_urls.base_url + 'cis/' + cis + '/instagram';

      return this.http.get<Instagram[]>(url, httpOptions);
  }
}
