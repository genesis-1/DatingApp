import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  constructor(public authenticationService: AuthenticationService, private alertify: AlertifyService) {


  }

  ngOnInit() {}

  login() {
    this.authenticationService.login(this.model).subscribe(next => {
      this.alertify.success('logged in Successfully');
    }, error => {
      this.alertify.error(error);
    });
  }

  loggedIn() {
   return this.authenticationService.loggedIn();
  }

  logout() {
    localStorage.removeItem('token');
    this.alertify.message('logged out');
  }
}
