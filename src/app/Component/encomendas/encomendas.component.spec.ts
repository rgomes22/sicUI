import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {  RouterTestingModule} from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { EncomendasComponent } from './encomendas.component';

describe('EncomendasComponent', () => {
  let component: EncomendasComponent;
  let fixture: ComponentFixture<EncomendasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncomendasComponent ],
      imports: [ RouterTestingModule, HttpClientTestingModule  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncomendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create catalgo component ', async (() => {
    fixture = TestBed.createComponent(EncomendasComponent);
    component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  }));
});
