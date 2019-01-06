import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiUsersConfigService {

  public apiLink: string;
  constructor() {
    this.apiLink = 'https://sic-users2018.herokuapp.com/';
  }
}
