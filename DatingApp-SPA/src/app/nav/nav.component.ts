import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  constructor(private authenticationService: AuthenticationService) {


  }

  ngOnInit() {}

  login() {
    this.authenticationService.login(this.model).subscribe(next => {
      console.log('logged in successfully');
    }, error => {
      console.log("failed to login");
    });
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }

  logout() {
    localStorage.removeItem('token');
    console.log('loggedout');
  }
}
