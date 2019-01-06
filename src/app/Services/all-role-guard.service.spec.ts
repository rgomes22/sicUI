import { TestBed } from '@angular/core/testing';

import { AllRoleGuardService } from './all-role-guard.service';
import { JwtModule } from '@auth0/angular-jwt';
import { tokenGetter } from '../app.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('AllRoleGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[RouterModule, RouterTestingModule, JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter }
      }), HttpClientTestingModule, HttpClientModule],
  }));

  it('should be created', () => {
    const service: AllRoleGuardService = TestBed.get(AllRoleGuardService);
    expect(service).toBeTruthy();
  });
});
