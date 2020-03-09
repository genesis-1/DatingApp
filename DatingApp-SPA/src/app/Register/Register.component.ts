import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service';
import { AlertifyService } from '../_services/alertify.service';


@Component({
  selector: 'app-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() CancelRegister = new EventEmitter();
  model: any = {};

  constructor(private authenticationService: AuthenticationService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  register() {
    this.authenticationService.register(this.model).subscribe(()=> {
      this.alertify.success('registration completed successfully');
    }, error => {
      this.alertify.error(error);
    });
  }

  cancel(){
    this.CancelRegister.emit(false);
  }

}
