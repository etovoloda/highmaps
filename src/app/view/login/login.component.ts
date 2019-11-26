import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {User} from '../../models/user.model';
import {AppState, isAuthState} from '../../store/app.state';
import {Login} from '../../store/actions/authentication.actions';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../core/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  user: User = {};
  getState: Observable<any>;
  errorMessage: string = null;
  newVariable: string;
  // comment for new commit
  // new remote comment
  // toying with branches

  constructor(
    private store: Store<AppState>,
    private auth: AuthenticationService,
    private router: Router,
  ) {
    this.getState = this.store.select(isAuthState);
  }

  ngOnInit() {
    this.getState.subscribe((state) => {
      this.errorMessage = state.errorMessage;
      if (this.auth.isLoggedIn()) { this.router.navigateByUrl('/map');
      }
    });
  }

  onSubmit(): void {
    const actionPayload = {
      login: this.user.login,
      password: this.user.password
    };
    this.store.dispatch(new Login(actionPayload));
  }
}
