import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Category } from '../model/Category';

@Injectable({
  providedIn: 'root'
})
export class ThreeServiceService {

  private messageSource = new BehaviorSubject<Category>(new Category());
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  sendMessage(message: Category) {
    this.messageSource.next(message);
  }
}
