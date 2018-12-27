import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { userLoginDTO } from '../DTOS/userLoginDTO';
import { Observable, Subject, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiUsersConfigService } from './api-users-config.service';
import { registerDTO } from '../DTOS/registerDTO';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private registerDTO: registerDTO;
  private apiLink;
  loadingError$ = new Subject<boolean>();
  constructor(private loginService: LoginService, private http: HttpClient,
    private apiUsersConfigService: ApiUsersConfigService) {
    this.apiLink = this.apiUsersConfigService.apiLink;
  }

  checkInputValidation(input: string): boolean {
    return this.loginService.checkInputValidation(input);
  }

  async constructUserRegisterDTO(email: string, password: string): Promise<registerDTO> {
    return this.registerDTO = {
      "email": email,
      "password": password,
      "role": "cliente"
    };
  }

  register(userInput: registerDTO): Observable<any> {
    return this.http.post(this.apiLink + "users/register", userInput, { observe: 'response', headers: new HttpHeaders().set('Content-Type', 'application/json'), responseType: 'text' })
      .pipe(catchError((error) => {
        this.loadingError$.next(true);
        return of(error);
      }))
  }
}
