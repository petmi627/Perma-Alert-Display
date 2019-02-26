import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    username: string;
    password: string;

    constructor(private loginService: LoginService,
                private router: Router) { }

    ngOnInit() {
        if (this.loginService.isLoggedIn()) {
            this.router.navigate(['/']);
        }
    }

    onSubmit() {
        this.loginService.login({username: this.username, password: this.password}).subscribe(auth => {
            if (auth) {
                this.router.navigate(['/']);
            } else {
                alert('Invalid Credentials');
            }
        });
    }

}
