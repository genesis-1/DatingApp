import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { User } from '../_models/User';
import { UserService } from '../_services/user.service';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthenticationService } from '../_services/authentication.service';

@Injectable()
export class MemberEditResolver implements Resolve<User> {
  constructor(
    private userService: UserService,
    private router: Router,
    private alertifyService: AlertifyService,
    private authenticationService: AuthenticationService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<User> {
    return this.userService.getUser(this.authenticationService.decodedToken.nameid).pipe(
        catchError(error =>{
            this.alertifyService.error('problem retrieving your data');
            this.router.navigate(['/members']);
            return of(null);
        })
    )
  }
}
