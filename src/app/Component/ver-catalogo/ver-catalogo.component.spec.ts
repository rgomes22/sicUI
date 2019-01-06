import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {  RouterTestingModule} from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { VerCatalogoComponent } from './ver-catalogo.component';

describe('ProductEditComponent', () => {
  let component: VerCatalogoComponent;
  let fixture: ComponentFixture<VerCatalogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerCatalogoComponent ],
      imports: [ RouterTestingModule, HttpClientTestingModule  ]
    })
    .compileComponents();
  }));

  it('should create editar-colecao component ', async (() => {
    fixture = TestBed.createComponent(VerCatalogoComponent);
    component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  }));
});
