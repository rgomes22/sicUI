import { Injectable } from '@angular/core';
import * as jwt_decode from '../../../node_modules/jwt-decode';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Subject, of, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiUsersConfigService } from './api-users-config.service';
import { catchError } from 'rxjs/operators';


export const TOKEN: string = 'token';
export const REFRESH_TOKEN: string = 'refreshToken';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private apiLink;
  loadingError$ = new Subject<boolean>();

  constructor(public jwtHelper: JwtHelperService, private http: HttpClient,
    private apiUsersConfigService: ApiUsersConfigService) {
    this.apiLink = this.apiUsersConfigService.apiLink;
  }

  getToken(): string {
    return localStorage.getItem(TOKEN);
  }

  setToken(token: string): void {
    localStorage.setItem(TOKEN, token);
  }

  getRefreshToken(): string {
    return localStorage.getItem(REFRESH_TOKEN);
  }

  setRefreshToken(token: string): void {
    localStorage.setItem(REFRESH_TOKEN, token);
  }

  getTokenExpirationDate(token: string): Date {
    const decoded = jwt_decode(token);
    console.log(decoded);
    if (decoded.exp === undefined) return null;

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  isTokenExpired(token?: string): boolean {
    if (!token) token = this.getToken();
    if (!token) return true;

    const date = this.getTokenExpirationDate(token);
    if (date === undefined) return false;
    return !(date.valueOf() > new Date().valueOf());
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem(TOKEN);
    //console.log(this.isTokenExpired());
    var email = this.getEmailFromToken();
    var refreshToken = this.getRefreshTokenFromToken();
    var userInput = {
      "email": email,
      "refreshToken": refreshToken
    }
    if (this.jwtHelper.isTokenExpired(token)) {
      console.log("hello");
      this.refreshToken(userInput).subscribe(result=>{
        console.log("hello2");
        console.log(result);
        if(result.status===200){
          this.setToken(JSON.parse(result.body).accessToken);
          return true;
        }else{
          return false;
        }
      });
    }else{
      return true;
    }    
  }

  public getEmailFromToken(): string {
    const token = localStorage.getItem(TOKEN);
    var decoded = jwt_decode(token);
    return decoded.email;
  }

  public getRefreshTokenFromToken(): string {
    const token = localStorage.getItem(REFRESH_TOKEN);
    //var decoded = jwt_decode(token);
    //console.log(decoded);
    return token;
  }

  refreshToken(userInput: { "email": string; "refreshToken": string; }): Observable<any> {
    console.log(userInput);
    return this.http.post(this.apiLink + "users/token", userInput, { observe: 'response', headers: new HttpHeaders().set('Content-Type', 'application/json'), responseType: 'text' })
      .pipe(catchError((error) => {
        this.loadingError$.next(true);
        return of(error);
      }));
  }

}
