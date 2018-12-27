import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/Services/auth-service.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  private isAuth: boolean;

  constructor(public router: Router, private authService: AuthServiceService) {

  }

  ngOnInit() {
    if (this.authService.isAuthenticated()) {
      this.isAuth = true;
    } else {
      this.isAuth = false;
    }
    console.log(this.isAuth);
    //return this.isAuth;
  }

  login(): void {
    this.router.navigate(['login']);
  }

  updateIsAuth(): void {
    console.log(this.isAuth);
    this.isAuth = true;
    console.log(this.isAuth);
  }

  logout(): void {
    this.authService.destroyTokens();
    this.isAuth = false;
    this.router.navigate[''];
  }
}
