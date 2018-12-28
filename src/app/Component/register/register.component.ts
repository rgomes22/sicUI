import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/Services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerError: boolean;
  public registerSuccess: boolean;
  private registerMessage: string;

  constructor(private registerService: RegisterService) {
    this.registerError = false;
    this.registerSuccess = false;
  }

  email = new FormControl('', [Validators.required, Validators.email]);
  pass = new FormControl('', [Validators.required]);
  passMatch = new FormControl('', [Validators.required])

  ngOnInit() {
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  getErrorMessagePass() {
    return this.pass.hasError('required') ? 'You must enter a value' :
      '';
  }

  getErrorMessagePassMatch() {
    return this.passMatch.hasError('required') ? 'You must enter a value' :
      this.passMatch.hasError('matchPassword') ? 'Your passwords do not match' :
        '';
  }

  checkMatching(password: string, passwordMatch: string) {
    if (password !== passwordMatch) {
      this.passMatch.setErrors({ 'matchPassword': true });
    }
  }

  register(email: string, password: string, passwordMatch: string) {
    if (!this.registerService.checkInputValidation(this.email.status))
      this.email.markAsTouched({ onlySelf: true });

    if (!this.registerService.checkInputValidation(this.pass.status))
      this.pass.markAsTouched({ onlySelf: true });

    if (!this.registerService.checkInputValidation(this.passMatch.status))
      this.pass.markAsTouched({ onlySelf: true });

    if (this.registerService.checkInputValidation(this.email.status) && this.registerService.checkInputValidation(this.pass.status) && this.registerService.checkInputValidation(this.passMatch.status)) {
      this.registerService.constructUserRegisterDTO(email, password).then((result) => {
        this.registerService.register(result).subscribe(message => {
          console.log(message);
          if (message.status === 201) {
            this.registerMessage = JSON.parse(message.body).message;
            this.registerSuccess = true;
            this.registerError = false;
          } else if (message.status === 400) {
            this.registerMessage = JSON.parse(message.error).message;
            this.registerError = true;
            this.registerSuccess = false;
          }
        })
      }).catch((err) => {
        console.log(err);
      });
    }
  }
}
