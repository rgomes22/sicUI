import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthDataService {

  private isAuth = new BehaviorSubject(false);
  currentMessage = this.isAuth.asObservable();
  private email = new BehaviorSubject("");
  currentEmail = this.email.asObservable();
  constructor() { }

  changeAuth(auth: boolean) {
    this.isAuth.next(auth);
  }

  changeUserEmail(email: string) {
    this.email.next(email);
  }
}
