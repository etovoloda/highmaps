import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {FormsModule} from '@angular/forms';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './view/login/login.component';
import {MainComponent} from './view/main/main.component';
import {SidebarComponent} from './view/main/sidebar/sidebar.component';
import {MapComponent} from './view/main/map/map.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {LogoutComponent} from './view/logout/logout.component';

import {HighchartsChartModule} from 'highcharts-angular';
import {AuthenticationService} from './core/authentication.service';
import {AuthenticationEffects} from './store/effects/authentication.effects';
import {reducers} from './store/app.state';
import {AuthenticationGuardService} from './core/authentication-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    SidebarComponent,
    MapComponent,
    NotFoundComponent,
    LogoutComponent,
    MapComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HighchartsChartModule,
    HttpClientModule,
    EffectsModule.forRoot([AuthenticationEffects]),
    StoreModule.forRoot(reducers, {})
  ],
  providers: [
    AuthenticationGuardService,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
