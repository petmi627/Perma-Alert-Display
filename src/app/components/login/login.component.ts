import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login/login.service';
import {ActivatedRoute, Router} from '@angular/router';
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
                private router: Router,
                private route: ActivatedRoute) { }

    ngOnInit() {
        if (this.loginService.isLoggedIn()) {
            this.userService.getUser(this.loginService.getLoggedUser()).subscribe(user => {
                this.router.navigate(['/' + user.cis.location.toLowerCase()]);
            }, error => {
                this.router.navigate(['/']);
            });
        }

        // TODO: Security Issue need to do a work around for Auto Login
        this.route.queryParams.subscribe(params => {
            if (params['username'] && params['password']) {
                console.log(params);
                this.username = params['username'];
                this.password = params['password'];
                this.onSubmit();
            }
        });
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
