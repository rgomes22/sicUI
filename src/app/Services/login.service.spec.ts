import { TestBed, inject } from '@angular/core/testing';

import { LoginService } from './login.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule, HttpClient, HttpHandler } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { tokenGetter } from '../app.module';


describe('LoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule, HttpClientTestingModule, HttpClientModule, JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter
      }
    })
    ]
  }));

  it('should be created', () => {
    const service: LoginService = TestBed.get(LoginService);
    expect(service).toBeTruthy();
  });

  const email: string = "1161113@isep.ipp.pt";
  const password: string = "Password1";

  it('checkLoginDataIntegraty - The data has errors so, should return false', () => {
    inject([LoginService], (service: LoginService) => {
      expect(service.checkLoginDataIntegraty(email, password, true)).toBe(false);
    })
  });

  it('checkLoginDataIntegraty - The email is empty, should return false', () => {
    inject([LoginService], (service: LoginService) => {
      expect(service.checkLoginDataIntegraty("", password, false)).toBe(false);
    })
  });

  it('checkLoginDataIntegraty - The password is empty, should return false', () => {
    inject([LoginService], (service: LoginService) => {
      expect(service.checkLoginDataIntegraty(email, "", false)).toBe(false);
    })
  });

  it('checkLoginDataIntegraty - Everything is allright, should return true', () => {
    inject([LoginService], (service: LoginService) => {
      expect(service.checkLoginDataIntegraty(email, password, false)).toBe(true);
    })
  });

  it('checkInputValidation - Its invalid, should return false', () => {
    inject([LoginService], (service: LoginService) => {
      expect(service.checkInputValidation("INVALID")).toBe(false);
    })
  });

  it('checkInputValidation - Its valid, should return true', () => {
    inject([LoginService], (service: LoginService) => {
      expect(service.checkInputValidation("VALID")).toBe(true);
    })
  });
});
