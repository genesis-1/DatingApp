import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service';


@Component({
  selector: 'app-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() CancelRegister = new EventEmitter();
  model: any = {};

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  register() {
    this.authenticationService.register(this.model).subscribe(()=> {
      console.log('registration completed successfully');
    }, error => {
      console.log(error);
    });
  }

  cancel(){
    this.CancelRegister.emit(false);
  }

}
