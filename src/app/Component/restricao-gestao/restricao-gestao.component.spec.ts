import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {  RouterTestingModule} from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { RestricaoGestaoComponent } from './restricao-gestao.component';

describe('RestricaoGestaoComponent', () => {
  let component: RestricaoGestaoComponent;
  let fixture: ComponentFixture<RestricaoGestaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestricaoGestaoComponent ],
      imports: [ RouterTestingModule, HttpClientTestingModule  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestricaoGestaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*it('should create RestricaoGestaoComponent ', async (() => {
    fixture = TestBed.createComponent(RestricaoGestaoComponent);
    component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  }));*/
});
