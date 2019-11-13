import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  testUser: User = {
    login: 'Admin',
    password: 'pa$$word'
  };

  constructor() {}

  getLoggedState(): string {
    return localStorage.getItem('loggedState');
  }

  isLoggedIn() {
    return this.getLoggedState() === 'true';
  }

  login(login: string, password: string): Observable<any> {
    return new Observable((observer) => {
      if (login === this.testUser.login && password === this.testUser.password) {
        observer.next({loggedState: 'true'});
      } else {
        observer.error({error: 'Ошибка авторизации'});
      }
      observer.complete();
    });
  }
}
