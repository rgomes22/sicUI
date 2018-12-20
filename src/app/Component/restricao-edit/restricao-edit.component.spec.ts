import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {  RouterTestingModule} from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { RestricaoEditComponent } from './restricao-edit.component';

describe('RestricaoEditComponent', () => {
  let component: RestricaoEditComponent;
  let fixture: ComponentFixture<RestricaoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestricaoEditComponent ],
      imports: [ RouterTestingModule, HttpClientTestingModule  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestricaoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create RestricaoEditComponent ', async (() => {
    fixture = TestBed.createComponent(RestricaoEditComponent);
    component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  }));
});
