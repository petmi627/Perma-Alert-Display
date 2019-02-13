import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {Infocrise} from '../../models/infocrise';

@Injectable({
    providedIn: 'root'
})
export class InfocriseService {
    crisisUrl = 'http://localhost:5000/display/crisis';

    constructor(private http: HttpClient) {}

    getCrisis(): Observable<Infocrise> {
        return this.http.get<Infocrise>(this.crisisUrl);
    }
}