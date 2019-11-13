import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {map, switchMap, catchError, tap} from 'rxjs/operators';

import {AuthenticationService} from '../../core/authentication.service';
import {
  AuthenticationActionTypes,
  Login, LoginSuccess, LoginFailure, Logout
} from '../actions/authentication.actions';


@Injectable()
export class AuthenticationEffects {

  constructor(
    private actions: Actions,
    private authService: AuthenticationService,
    private router: Router,
  ) {}

  @Effect()
  Login: Observable<any> = this.actions.pipe(
    ofType(AuthenticationActionTypes.LOGIN),
    map((action: Login) => action.payload),
    switchMap(payload => {
      return this.authService.login(payload.login, payload.password)
        .pipe(
          map((user) => {
            return new LoginSuccess({loggedState: user.loggedState});
          }),
          catchError((error) => {
            return of(new LoginFailure({error}));
          }));
    }));


  @Effect({dispatch: false})
  LoginSuccess: Observable<any> = this.actions.pipe(
    ofType(AuthenticationActionTypes.LOGIN_SUCCESS),
    tap(() => {
      localStorage.setItem('loggedState', 'true');
      this.router.navigateByUrl('/map');
    })
  );

  @Effect({dispatch: false})
  LoginFailure: Observable<any> = this.actions.pipe(
    ofType(AuthenticationActionTypes.LOGIN_FAILURE)
  );

  @Effect({dispatch: false})
  public Logout: Observable<any> = this.actions.pipe(
    ofType(AuthenticationActionTypes.LOGOUT),
    tap(() => {
      localStorage.setItem('loggedState', 'false');
      this.router.navigateByUrl('/login');
    })
  );
}
