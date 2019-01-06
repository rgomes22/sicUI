import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthServiceService } from "src/app/Services/auth-service.service";
import { AuthDataService } from "src/app/Services/auth-data.service";
import { IsRoleService } from "src/app/Services/is-role.service";

@Component({
  selector: "app-dash",
  templateUrl: "./dash.component.html",
  styleUrls: ["./dash.component.css"]
})
export class DashComponent implements OnInit {
  public isAuth: boolean;
  public user_email: string;
  constructor(
    public router: Router,
    private authService: AuthServiceService,
    private authDataService: AuthDataService,
    private roleService: IsRoleService
  ) {
    if (this.authService.isAuthenticated()) {
      this.isAuth = true;
      this.user_email = authService.getEmailFromToken();
    } else {
      this.isAuth = false;
      this.user_email = "";
    }
    this.authDataService.changeAuth(this.isAuth);
    this.authDataService.changeUserEmail(this.user_email);
  }

  ngOnInit() {
    /* if (this.authService.isAuthenticated()) {
      this.isAuth = true;
    } else {
      this.isAuth = false;
    }
    console.log(this.isAuth); */
    //return this.isAuth;
    this.authDataService.currentMessage.subscribe(
      isAuth => (this.isAuth = isAuth)
    );
    this.authDataService.currentEmail.subscribe(
      email => (this.user_email = email)
    );
  }

  login(): void {
    this.router.navigate(["login"]);
  }

  register(): void {
    this.router.navigate(["register"]);
  }

  updateIsAuth(): void {
    console.log(this.isAuth);
    this.isAuth = true;
    this.user_email = this.authService.getEmailFromToken();
    this.authDataService.changeAuth(this.isAuth);
    this.authDataService.changeUserEmail(this.user_email);
    console.log(this.isAuth);
  }

  logout(): void {
    this.authService.destroyTokens();
    this.isAuth = false;
    this.user_email = "";
    this.authDataService.changeAuth(this.isAuth);
    this.authDataService.changeUserEmail(this.user_email);
    this.roleService.changeRole(false, false);
    this.router.navigate[""];
  }
}
