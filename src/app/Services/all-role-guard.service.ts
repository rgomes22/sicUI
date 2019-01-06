import { Injectable } from '@angular/core';
import { AuthServiceService } from './auth-service.service';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot
} from '@angular/router';
import { ErrorService } from './error.service';
import decode from '../../../node_modules/jwt-decode';
import { tokenKey } from '@angular/core/src/view';
@Injectable({
  providedIn: 'root'
})
export class AllRoleGuardService implements CanActivate{

  constructor(public auth: AuthServiceService, public router: Router, private errorService: ErrorService) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data.expectedRole;
    const path = route.data.path;
    const token = this.auth.getToken();

    const tokenPayload = decode(token);
    var hasRole = false;
    for(var i=0;i<expectedRole.length;i++){
      if(expectedRole[i]==tokenPayload.role){
        hasRole = true;
      }
    }
    if(!hasRole || !this.auth.isAuthenticated()){
      this.errorService.changeMessage("O utilizador atual não tem permissões para aceder à página: " + path);
      this.router.navigate(['error']);
      return false;
    }
    /* if (!this.auth.isAuthenticated() || tokenPayload.role !== expectedRole) {
      this.errorService.changeMessage("O utilizador atual não tem permissões para aceder à página: " + path);
      this.router.navigate(['error']);
      return false;
    } */
    return true;
  }
}
