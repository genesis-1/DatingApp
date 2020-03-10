import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from '../_services/authentication.service';
import { AlertifyService } from '../_services/alertify.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private alertify: AlertifyService
    ) {}

  canActivate(): boolean {
    if (this.authenticationService.loggedIn()){
      return true;
    }
    this.alertify.error('Not allowed');
    this.router.navigate(['/home']);
    return false;
  }
}
