import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  registerMode = false;

  ngOnInit() {
  }
  registerToggle() {
    this.registerMode = true;
  }
  cancelRegisterMode(registerMode: boolean){
    this.registerMode = registerMode;
  }

}
