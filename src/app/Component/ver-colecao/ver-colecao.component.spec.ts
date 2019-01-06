import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {  RouterTestingModule} from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { VerColecaoComponent } from './ver-colecao.component';

describe('ProductEditComponent', () => {
  let component: VerColecaoComponent;
  let fixture: ComponentFixture<VerColecaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerColecaoComponent ],
      imports: [ RouterTestingModule, HttpClientTestingModule  ]
    })
    .compileComponents();
  }));

  it('should create editar-colecao component ', async (() => {
    fixture = TestBed.createComponent(VerColecaoComponent);
    component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  }));
});
