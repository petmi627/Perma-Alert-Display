import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {environment} from '../../../environments/environment';
import {catchError, mapTo, tap} from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loggedUser: string;

  constructor(private http: HttpClient) { }

  login(user: { username: string, password: string}): Observable<boolean> {
    return this.http.post<any>(`${environment.api_url}/login`, user, httpOptions).pipe(
        tap(tokens => this.doLoginUser(user.username, tokens)),
        mapTo(true),
        catchError(error => {
          return of(false);
        })
    );
  }

  doLoginUser(username, tokens) {
    this.loggedUser = username;
    this.storeTokens(tokens);
  }

  isLoggedIn() {
    return !!this.getJwtToken();
  }

  getJwtToken() {
    return localStorage.getItem('access_token');
  }

  getRefreshToken() {
      return localStorage.getItem('refresh_token');
  }

  refreshToken() {
    let httpOptions = {
         headers: new HttpHeaders({'Authorization': `Bearer ${this.getRefreshToken()}`})
    };

    return this.http.post<any>(`${environment.api_url}/refresh`, {}, httpOptions)
        .pipe(tap((tokens) => {
            this.storeJwtToken(tokens.access_token);
        }
    ));
  }

  storeJwtToken(token) {
      localStorage.setItem('access_token', token);
  }

  storeTokens(tokens) {
    localStorage.setItem('access_token', tokens.access_token);
    localStorage.setItem('refresh_token', tokens.refresh_token);
  }
}
