import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {Infocrise} from '../../models/infocrise';
import {environment} from '../../../environments/environment';
import {Headline} from '../../models/headline';

@Injectable({
    providedIn: 'root'
})
export class InfocriseService {
    constructor(private http: HttpClient) {}

    getCrisis(): Observable<Infocrise> {
        let url = environment.api_urls.base_url + 'crisis';

        return this.http.get<Infocrise>(url);
    }
}