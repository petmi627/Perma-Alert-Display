import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Infocrise} from '../../models/infocrise';
import { environment } from '../../../environments/environment';

const httpOptions = {
    headers: new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})
};

@Injectable({
  providedIn: 'root'
})
export class CisService {
    cisUrl = 'cis/';

    constructor(private http: HttpClient) {}

    getCis(cis): Observable<Infocrise> {

        let url = environment.api_urls.base_url + this.cisUrl + cis;

        return this.http.get<Infocrise>(url, httpOptions);
    }
}
