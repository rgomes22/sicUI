import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot } from "@angular/router";
import { AuthServiceService } from "./auth-service.service";
import decode from "../../../node_modules/jwt-decode";
import { ErrorService } from "./error.service";
@Injectable({
  providedIn: "root"
})
export class RoleGuardService implements CanActivate {
  constructor(
    public auth: AuthServiceService,
    public router: Router,
    private errorService: ErrorService
  ) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    console.log("entra");
    const expectedRole = route.data.expectedRole;
    const path = route.data.path;

    const token = this.auth.getToken();
    if (token === "") {
      return this.errorMessage(path);
      /* this.errorService.changeMessage(
        "O utilizador atual não tem permissões para aceder à página: " + path
      );
      this.router.navigate(["error"]);
      return false; */
    }
    const tokenPayload = decode(token);

    if (!this.auth.isAuthenticated() || tokenPayload.role !== expectedRole) {
      return this.errorMessage(path);
      /* this.errorService.changeMessage(
        "O utilizador atual não tem permissões para aceder à página: " + path
      );
      this.router.navigate(["error"]);
      return false; */
    }
    return true;
  }

  errorMessage(path: string): boolean {
    this.errorService.changeMessage(
      "O utilizador atual não tem permissões para aceder à página: " + path
    );
    this.router.navigate(["error"]);
    return false;
  }
}
