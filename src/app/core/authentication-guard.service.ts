import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuardService implements CanActivate {

  constructor(
    public router: Router,
    private authenticationService: AuthenticationService
  ) {}

  canActivate(): boolean {
    const isLoggedIn: boolean = this.authenticationService.isLoggedIn();
    if (!isLoggedIn) {
      this.router.navigateByUrl('/login');
      return false;
    }
    return true;
  }
}
