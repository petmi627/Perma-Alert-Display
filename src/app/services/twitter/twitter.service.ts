import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Twitter} from '../../models/twitter';

@Injectable({
  providedIn: 'root'
})
export class TwitterService {
    twitterUrl = 'http://localhost:5000/display/cis/diekirch/twitter';

    constructor(private http: HttpClient) { }

    getTwitterStatuses(): Observable<Twitter[]> {
        return this.http.get<Twitter[]>(this.twitterUrl);
    }
}
