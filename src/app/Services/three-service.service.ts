import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Data } from '../model/Data';

@Injectable({
  providedIn: 'root'
})
export class ThreeServiceService {

  private messageSource = new BehaviorSubject<Data>(new Data());
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  sendMessage(message: Data) {
    this.messageSource.next(message);
  }
}
