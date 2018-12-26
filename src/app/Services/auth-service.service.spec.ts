import { TestBed } from '@angular/core/testing';

import { AuthServiceService } from './auth-service.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { tokenGetter } from '../app.module';

describe('AuthServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule, HttpClientTestingModule, HttpClientModule,JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter }
      })
    ]
  }));

  it('should be created', () => {
    const service: AuthServiceService = TestBed.get(AuthServiceService);
    expect(service).toBeTruthy();
  });
});
