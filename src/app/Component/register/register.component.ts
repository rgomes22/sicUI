import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/Services/register.service';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerError: boolean;
  public registerSuccess: boolean;
  private registerMessage: string;

  pwdPattern = '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{16,}';

  constructor(private registerService: RegisterService, public dialog: MatDialog) {
    this.registerError = false;
    this.registerSuccess = false;
  }

  email = new FormControl('', [Validators.required, Validators.email]);
  pass = new FormControl('', [Validators.required, Validators.pattern(this.pwdPattern)]);
  passMatch = new FormControl('', [Validators.required]);
  check = new FormControl();

  ngOnInit() {
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'Introduz um valor' :
      this.email.hasError('email') ? 'Email Inválido' :
        '';
  }

  getErrorMessagePass() {
    return this.pass.hasError('required') ? 'Introduz um valor' :
      this.pass.hasError('pattern') ? 'A password tem de ter no mínimo 16 caracteres com pelo menos uma letra maiúscula, uma letra minúscula, um número e um caracter especial' :
        '';
  }

  getErrorMessagePassMatch() {
    return this.passMatch.hasError('required') ? 'Introduz um valor' :
      this.passMatch.hasError('matchPassword') ? 'Passwords não condizentes' :
        '';
  }

  checkMatching(password: string, passwordMatch: string) {
    if (password !== passwordMatch) {
      this.passMatch.setErrors({ 'matchPassword': true });
    }
  }

  register(email: string, password: string, passwordMatch: string, check: boolean) {
    if (check) {
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

  openDialog() {
    const dialogRef = this.dialog.open(DialogContent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
@Component({
  selector: 'dialog-content',
  templateUrl: 'dialog-content.html',
})
export class DialogContent { }
