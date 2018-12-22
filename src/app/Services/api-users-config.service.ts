import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiUsersConfigService {

  public apiLink: string;
  constructor() {
    this.apiLink = 'http://localhost:3000/';
  }
}
