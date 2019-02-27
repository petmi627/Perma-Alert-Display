import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Twitter} from '../../models/twitter';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    constructor(private http: HttpClient) { }

    getUser(username): Observable<any> {
        return this.http.get<any>(`${environment.api_url}/users/${username}`);
    }
}
