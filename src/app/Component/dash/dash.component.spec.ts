import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DemoMaterialModule} from '../../material.module';
import { DashComponent } from './dash.component';
import {  RouterTestingModule} from '@angular/router/testing';
import { MatChip, MatChipsModule, MatToolbarModule } from '@angular/material';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
export function tokenGetter() {
  return localStorage.getItem('token');
}
describe('DashComponent', () => {
  let component: DashComponent;
  let fixture: ComponentFixture<DashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashComponent ],
      imports: [RouterTestingModule, MatChipsModule, MatToolbarModule, JwtModule.forRoot({
        config: {
          tokenGetter: tokenGetter }
        }), HttpClientTestingModule, HttpClientModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create dash component', () => {
    expect(component).toBeTruthy();
  });
});
