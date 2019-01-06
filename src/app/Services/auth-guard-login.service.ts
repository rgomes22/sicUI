import { Injectable } from "@angular/core";
import { AuthServiceService } from "./auth-service.service";
import { Router, CanActivate } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthGuardLoginService implements CanActivate {
  constructor(public auth: AuthServiceService, public router: Router) {}

  canActivate(): boolean {
    if (this.auth.isAuthenticated()) {
      this.router.navigate(["error"]);
      return false;
    }
    return true;
  }
}
