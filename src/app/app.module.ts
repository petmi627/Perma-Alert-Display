import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

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
import { InterventionComponent } from './components/display/intervention/intervention.component';
import { DisplayComponent } from './components/display/display.component';
import { AppRoutingModule } from './app-routing.module';
import {ToastaModule} from 'ngx-toasta';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import {FormsModule} from '@angular/forms';
import {LoginService} from './services/login/login.service';
import {TokenInterceptor} from './token.interceptor';

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
    SocialfeedComponent,
    InterventionComponent,
    DisplayComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ToastaModule.forRoot()
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
      InterventionService,
      LoginService,
      {
          provide: HTTP_INTERCEPTORS,
          useClass: TokenInterceptor,
          multi: true
      }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
