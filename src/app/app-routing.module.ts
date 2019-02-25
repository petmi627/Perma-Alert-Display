import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DisplayComponent} from './components/display/display.component';
import {HomeComponent} from './components/home/home.component';

const routes: Routes = [
    {path: ':cis', component: DisplayComponent},
    {path: '', component: HomeComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
