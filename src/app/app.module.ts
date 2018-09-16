import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClockComponent } from './components/display/clock/clock.component';
import { AmbulanceComponent } from './components/display/ambulance/ambulance.component';
import { FirerescueComponent } from './components/display/firerescue/firerescue.component';
import { HospitalsComponent } from './components/display/hospitals/hospitals.component';
import { WeatherComponent } from './components/display/weather/weather.component';
import { CalendarComponent } from './components/display/calendar/calendar.component';
import { InfocriseComponent } from './components/display/infocrise/infocrise.component';
import { NewsfeedComponent } from './components/display/newsfeed/newsfeed.component';

@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    AmbulanceComponent,
    FirerescueComponent,
    HospitalsComponent,
    WeatherComponent,
    CalendarComponent,
    InfocriseComponent,
    NewsfeedComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
