import { TestBed, inject } from '@angular/core/testing';

import { RegisterService } from './register.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { tokenGetter } from '../app.module';

describe('RegisterService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule, HttpClientTestingModule, HttpClientModule,JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter }
      })
    ]
  }));

  it('should be created', () => {
    const service: RegisterService = TestBed.get(RegisterService);
    expect(service).toBeTruthy();
  });

  it('checkInputValidation - Its invalid, should return false', () => {
    inject([RegisterService], (service: RegisterService) => {
      expect(service.checkInputValidation("INVALID")).toBe(false);
    })
  });

  it('checkInputValidation - Its valid, should return true', () => {
    inject([RegisterService], (service: RegisterService) => {
      expect(service.checkInputValidation("VALID")).toBe(true);
    })
  });
});
