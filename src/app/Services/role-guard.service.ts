import { Injectable } from '@angular/core';
import { 
  Router,
  CanActivate,
  ActivatedRouteSnapshot
} from '@angular/router';
import { AuthServiceService } from './auth-service.service';
import decode from '../../../node_modules/jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate{

  constructor(public auth: AuthServiceService, public router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data.expectedRole;
    const token = this.auth.getToken();

    const tokenPayload = decode(token);

    if(!this.auth.isAuthenticated() || tokenPayload.role !== expectedRole) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
}
