import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/Services/auth-service.service';
import { AuthDataService } from 'src/app/Services/auth-data.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  public isAuth: boolean;

  constructor(public router: Router, private authService: AuthServiceService, private authDataService: AuthDataService) {
    if (this.authService.isAuthenticated()) {
      this.isAuth = true;
    } else {
      this.isAuth = false;
    }
    this.authDataService.changeAuth(this.isAuth);
  }

  ngOnInit() {
    /* if (this.authService.isAuthenticated()) {
      this.isAuth = true;
    } else {
      this.isAuth = false;
    }
    console.log(this.isAuth); */
    //return this.isAuth;
    this.authDataService.currentMessage.subscribe(isAuth => this.isAuth = isAuth);
  }

  login(): void {
    this.router.navigate(['login']);
  }

  register(): void {
    this.router.navigate(['register']);
  }

  updateIsAuth(): void {
    console.log(this.isAuth);
    this.isAuth = true;
    this.authDataService.changeAuth(this.isAuth);
    console.log(this.isAuth);
  }

  logout(): void {
    this.authService.destroyTokens();
    this.isAuth = false;
    this.authDataService.changeAuth(this.isAuth);
    this.router.navigate[''];
  }
}
