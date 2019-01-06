import { TestBed } from '@angular/core/testing';

import { TokenInterceptorService } from './token-interceptor.service';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { tokenGetter } from './app.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';

describe('TokenInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter }
      }), HttpClientTestingModule, HttpClientModule],
  }));

  it('should be created', () => {
    const service: TokenInterceptorService = TestBed.get(TokenInterceptorService);
    expect(service).toBeTruthy();
  });
});
