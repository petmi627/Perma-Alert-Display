import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ClockComponent } from './components/display/clock/clock.component';
import { AmbulanceComponent } from './components/display/ambulance/ambulance.component';
import { FirerescueComponent } from './components/display/firerescue/firerescue.component';
import { HospitalsComponent } from './components/display/hospitals/hospitals.component';
import { WeatherComponent } from './components/display/weather/weather.component';
import { CalendarComponent } from './components/display/calendar/calendar.component';
import { InfocriseComponent } from './components/display/infocrise/infocrise.component';
import { HeadlinesComponent } from './components/display/headlines/headlines.component';
import {HospitalsService} from './services/hospitals/hospitals.service';
import {WeatherService} from './services/weather/weather.service';
import {HeadlineService} from './services/headline/headline.service';
import {DutylistService} from './services/dutylist/dutylist.service';
import {CalendarService} from './services/event/calendar.service';
import {TimeAgoPipe} from 'time-ago-pipe';
import {InstagramService} from './services/instagram/instagram.service';
import {TwitterService} from './services/twitter/twitter.service';
import {SocialfeedComponent} from './components/display/socialfeed/socialfeed.component';
import {StatsService} from './services/intervention/stats.service';
import {InterventionService} from './services/intervention/intervention.service';

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
    HeadlinesComponent,
    TimeAgoPipe,
    SocialfeedComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
      HospitalsService,
      WeatherService,
      HeadlineService,
      DutylistService,
      CalendarService,
      InstagramService,
      TwitterService,
      StatsService,
      InterventionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
