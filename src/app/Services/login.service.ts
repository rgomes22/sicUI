import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  checkLoginDataIntegraty(email: string, password: string, hasErrors: boolean): boolean {
    console.log("Has errors " + hasErrors);
    if(hasErrors) return false;

    if(!email || !password) {
      return false;
    }
    return true;
  }

  checkEmail(hasErrors: boolean): boolean{
    if(hasErrors) return false;
    return true;
  }
}
