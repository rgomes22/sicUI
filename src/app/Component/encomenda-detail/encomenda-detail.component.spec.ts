import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {  RouterTestingModule} from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { EncomendaDetailComponent } from './encomenda-detail.component';

describe('EncomendaDetailComponent', () => {
  let component: EncomendaDetailComponent;
  let fixture: ComponentFixture<EncomendaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncomendaDetailComponent ],
      imports: [ RouterTestingModule, HttpClientTestingModule  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncomendaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create catalgo component ', async (() => {
    fixture = TestBed.createComponent(EncomendaDetailComponent);
    component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  }));
});
