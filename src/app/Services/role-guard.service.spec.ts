import { TestBed, inject } from '@angular/core/testing';

import { RoleGuardService } from './role-guard.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { tokenGetter } from '../app.module';
import { 
  Router,
  CanActivate,
  ActivatedRouteSnapshot
} from '@angular/router';
describe('RoleGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule, HttpClientTestingModule, HttpClientModule,JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter }
      })
    ]
  }));

  it('should be created', () => {
    const service: RoleGuardService = TestBed.get(RoleGuardService);
    expect(service).toBeTruthy();
  });

  it('canActivate - Not authenticated, should return false', () => {
    inject([RoleGuardService], (service: RoleGuardService) => {
      inject([ActivatedRouteSnapshot], (service2: ActivatedRouteSnapshot)=>{
        expect(service.canActivate(service2)).toBe(false);
      })      
    })
  });
});
