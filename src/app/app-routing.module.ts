import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DisplayComponent} from './components/display/display.component';

const routes: Routes = [
    {path: ':cis', component: DisplayComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
