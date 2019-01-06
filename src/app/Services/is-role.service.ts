import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IsRoleService {
  private isClient = new BehaviorSubject(false);
  private isGestor = new BehaviorSubject(false);
  currentMessageIsClient = this.isClient.asObservable();
  currentMessageIsGestor = this.isGestor.asObservable();
  constructor() { }

  changeRole(client: boolean, gestor: boolean): void{
    this.isClient.next(client);
    this.isGestor.next(gestor);
  }
}
