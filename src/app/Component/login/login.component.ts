import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { LoginService } from '../../Services/login.service';
import { AuthServiceService } from 'src/app/Services/auth-service.service';
import { Router } from '@angular/router';
import { AuthDataService } from 'src/app/Services/auth-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private loginFirstFactor: boolean;
  private loginSecondFactor: boolean;
  private loginError: boolean;
  private loginFirstFactorMessage: string;
  private loginErrorFact2: boolean;
  private loginSecondFactorMessage: string;

  constructor(private loginService: LoginService, private authService: AuthServiceService, public router: Router, private authDataService: AuthDataService) {
    this.loginFirstFactor = true;
    this.loginSecondFactor = false;
    this.loginError = false;
    this.loginErrorFact2 = false;
  }

  ngOnInit() {
  }

  email = new FormControl('', [Validators.required, Validators.email]);
  pass = new FormControl('', [Validators.required]);
  codigo = new FormControl('', [Validators.required]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  getErrorMessagePass() {
    return this.pass.hasError('required') ? 'You must enter a value' :
      '';
  }

  getErrorMessageCodigo() {
    return this.codigo.hasError('required') ? 'You must enter a value' :
      '';
  }

  logIn(email: string, password: string): void {
    if (!this.loginService.checkInputValidation(this.email.status))
      this.email.markAsTouched({ onlySelf: true });

    if (!this.loginService.checkInputValidation(this.pass.status))
      this.pass.markAsTouched({ onlySelf: true });

    if (this.loginService.checkInputValidation(this.email.status) && this.loginService.checkInputValidation(this.pass.status)) {
      this.loginService.constructUserLoginDTO(email, password).then(result => {
        this.loginService.loginCheckFactorOne(result).subscribe(message => {
          console.log(message);
          if (message.status === 200) {
            this.loginFirstFactorMessage = JSON.parse(message.body).message;
            this.loginFirstFactor = false;
            this.loginSecondFactor = true;
          } else if (message.status === 400) {
            this.loginFirstFactorMessage = JSON.parse(message.error).message;
            this.loginError = true;
          }
        });
      })
    }
  }

  logInFact2(email: string, codigo: string): void {
    if (!this.loginService.checkInputValidation(this.email.status))
      this.email.markAsTouched({ onlySelf: true });

    if (!this.loginService.checkInputValidation(this.codigo.status))
      this.codigo.markAsTouched({ onlySelf: true });

    if (this.loginService.checkInputValidation(this.email.status) && this.loginService.checkInputValidation(this.codigo.status)) {
      this.loginService.constructUserLoginFact2DTO(email, codigo).then(result => {
        this.loginService.loginCheckFactorTwo(result).subscribe(message => {
          if (message.status === 200) {
            this.authService.setToken(JSON.parse(message.body).accessToken);
            this.authService.setRefreshToken(JSON.parse(message.body).refreshToken);
            this.authDataService.changeAuth(true);
            this.router.navigate(['']);
          } else if (message.status === 400) {
            this.loginSecondFactorMessage = JSON.parse(message.error).message;
            this.loginErrorFact2 = true;
          }
          console.log(message);
        });
      })
    }
  }
}