import { TestBed } from '@angular/core/testing';

import { AuthGuardLoginService } from './auth-guard-login.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
export function tokenGetter() {
  return localStorage.getItem('token');
}
describe('AuthGuardLoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule, HttpClientTestingModule, HttpClientModule,JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter }
      })
    ]
  }));

  it('should be created auth-guard-login-service', () => {
    const service: AuthGuardLoginService = TestBed.get(AuthGuardLoginService);
    expect(service).toBeTruthy();
  });
});
