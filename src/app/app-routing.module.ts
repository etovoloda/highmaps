import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {NotFoundComponent} from './not-found/not-found.component';
import {MainComponent} from './view/main/main.component';
import {LoginComponent} from './view/login/login.component';
import {LogoutComponent} from './view/logout/logout.component';
import {AuthenticationGuardService} from './core/authentication-guard.service';

const routes: Routes = [
  {
    canActivate: [AuthenticationGuardService],
    path: 'map',
    component: MainComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/map',
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: '/404'
  }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule {
}
