import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DisplayComponent} from './components/display/display.component';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {AuthGuard} from './guards/auth.guard';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: ':cis', component: DisplayComponent, canActivate: [AuthGuard]},
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ],
  providers: [
      AuthGuard
  ]
})
export class AppRoutingModule { }
