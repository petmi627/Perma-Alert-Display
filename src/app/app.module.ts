import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClockComponent } from './components/display/clock/clock.component';
import { AmbulanceComponent } from './components/display/ambulance/ambulance.component';
import { FirerescueComponent } from './components/display/firerescue/firerescue.component';
import { HospitalsComponent } from './components/display/hospitals/hospitals.component';

@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    AmbulanceComponent,
    FirerescueComponent,
    HospitalsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
