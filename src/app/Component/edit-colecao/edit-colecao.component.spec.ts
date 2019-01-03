import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditColecaoComponent } from './edit-colecao.component';
import {  RouterTestingModule} from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ColecaoEditComponent', () => {
  let component: EditColecaoComponent;
  let fixture: ComponentFixture<EditColecaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditColecaoComponent ],
      imports: [ RouterTestingModule, HttpClientTestingModule  ]
    }).compileComponents();
    


  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditColecaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
});

