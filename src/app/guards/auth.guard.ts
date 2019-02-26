import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {LoginService} from '../services/login/login.service';
import {Observable} from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authService: LoginService
    ) {}

    canActivate() {
        if (!this.authService.isLoggedIn()) {
            this.router.navigate(['/login']);
            return false;
        } else {
            return true;
        }
    }
}