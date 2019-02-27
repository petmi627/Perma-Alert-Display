import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login/login.service';
import {Router} from '@angular/router';
import {UserService} from '../../services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    username: string;
    password: string;

    constructor(private loginService: LoginService,
                private userService: UserService,
                private router: Router) { }

    ngOnInit() {
        if (this.loginService.isLoggedIn()) {
            this.userService.getUser(this.loginService.getLoggedUser()).subscribe(user => {
                this.router.navigate(['/' + user.cis.location.toLowerCase()]);
            }, error => {
                this.router.navigate(['/']);
            });
        }
    }

    onSubmit() {
        this.loginService.login({username: this.username, password: this.password}).subscribe(auth => {
            if (auth) {
                this.userService.getUser(this.username).subscribe(user => {
                    this.router.navigate(['/', user.cis.location.toLowerCase()]);
                }, error => {
                    this.router.navigate(['/']);
                });
            } else {
                alert('Invalid Credentials');
            }
        });
    }

}
