import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiUsersConfigService } from '../Services/api-users-config.service';
import { catchError } from 'rxjs/operators';
import { Observable, Subject, of, pipe } from 'rxjs';
import { userLoginDTO } from '../DTOS/userLoginDTO';
import { userLoginFact2DTO } from '../DTOS/userLoginFact2DTO';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiLink;
  loadingError$ = new Subject<boolean>();
  private userLoginDTO: userLoginDTO;
  private userLoginFact2DTO: userLoginFact2DTO;
  constructor(private http: HttpClient,
    private apiUsersConfigService: ApiUsersConfigService) { 
    this.apiLink = this.apiUsersConfigService.apiLink;
  }

  checkLoginDataIntegraty(email: string, password: string, hasErrors: boolean): boolean {
    console.log("Has errors " + hasErrors);
    if (hasErrors) return false;

    if (!email || !password) {
      return false;
    }
    return true;
  }

  checkInput(hasErrors: boolean): boolean {
    if (hasErrors) return false;
    return true;
  }

  checkInputValidation(validationString: string): boolean {
    if (validationString === 'INVALID') return false;
    return true;
  }

  loginCheckFactorOne(userInput: userLoginDTO): Observable<any> {
    return this.http.post(this.apiLink + "users/login", userInput, { observe: 'response', headers: new HttpHeaders().set('Content-Type', 'application/json'), responseType: 'text'})
    .pipe(catchError((error) => {
      this.loadingError$.next(true);
      return of(error);
    }));
  }

  loginCheckFactorTwo(userInput: userLoginFact2DTO): Observable<any> {
    return this.http.post(this.apiLink + "users/login2", userInput, { observe: 'response', headers: new HttpHeaders().set('Content-Type', 'application/json'), responseType: 'text'})
    .pipe(catchError((error) => {
      this.loadingError$.next(true);
      return of(error);
    }));
  }
  
  async constructUserLoginDTO(email: string, password: string): Promise<userLoginDTO> {
    return this.userLoginDTO = {
      "email": email,
      "password": password
    };
  }
  async constructUserLoginFact2DTO (email: string, code: string): Promise<userLoginFact2DTO> {
    return this.userLoginFact2DTO = {
      "email": email,
      "code": code
    };
  }
}
