import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, isAuthState} from '../../store/app.state';
import { Logout } from '../../store/actions/authentication.actions';

@Component({
  selector: 'app-logout',
  template: '',
  styles: ['']
})
export class LogoutComponent implements OnInit {

  getState: Observable<any>;
  isAuthenticated = false;
  constructor(
    private store: Store<AppState>,
  ) {
    this.getState = this.store.select(isAuthState);
  }
  ngOnInit() {
    this.getState.subscribe((state) => {
      this.isAuthenticated = state.isAuthenticated;
    });
    this.logout();
  }
  logout(): void {
    this.store.dispatch(new Logout);
  }

}
