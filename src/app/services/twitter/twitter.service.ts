import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Twitter} from '../../models/twitter';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TwitterService {
    constructor(private http: HttpClient) { }

    getTwitterStatuses(cis): Observable<Twitter[]> {
        let url = environment.api_urls.base_url + 'cis/' + cis + '/twitter';

        return this.http.get<Twitter[]>(url);
    }
}
