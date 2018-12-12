import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriaisComponent } from './materiais.component';
import {  RouterTestingModule} from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MateriaisComponent', () => {
  let component: MateriaisComponent;
  let fixture: ComponentFixture<MateriaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MateriaisComponent ],
      imports: [ RouterTestingModule, HttpClientTestingModule  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MateriaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create catalgo component ', async (() => {
    fixture = TestBed.createComponent(MateriaisComponent);
    component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  }));
});
