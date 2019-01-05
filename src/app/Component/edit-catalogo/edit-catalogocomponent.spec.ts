import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EditCatalogoComponent } from './edit-catalogo.component';
import {  RouterTestingModule} from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ColecaoEditComponent', () => {
  let component: EditCatalogoComponent;
  let fixture: ComponentFixture<EditCatalogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCatalogoComponent ],
      imports: [ RouterTestingModule, HttpClientTestingModule  ]
    }).compileComponents();
    


  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCatalogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
});

