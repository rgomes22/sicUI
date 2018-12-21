import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { LoginService } from '../../Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private loginFalhado: boolean;

  constructor( private loginService: LoginService ) { 
    this.loginFalhado = false;
  }

  ngOnInit() {
  }

  email = new FormControl('', [Validators.required, Validators.email]);
  pass = new FormControl('', [Validators.required]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  getErrorMessagePass() {
    return this.pass.hasError('required') ? 'You must enter a value' :
            '';
  }

  logIn(email: string, password: string): void {
    if(this.loginService.checkEmail(this.email.hasError('email'))){
      console.log("entra " + this.email.status);
      this.email.setErrors({'incorrect': true});
      //this.getErrorMessage();
    }
    /*if(this.loginService.checkLoginDataIntegraty(email, password, this.email.hasError('email'))){
      //this.loginFalhado = false;
    }else{
      //this.loginFalhado = true;
    }*/
  }
}