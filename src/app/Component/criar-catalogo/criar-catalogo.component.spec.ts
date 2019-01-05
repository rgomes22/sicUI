import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { CriarCatalogoComponent } from './criar-catalogo.component';
import { RouterTestingModule} from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('CriarProdutoComponent', () => {
  let component: CriarCatalogoComponent;
  let fixture: ComponentFixture<CriarCatalogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriarCatalogoComponent],
      imports: [ RouterTestingModule, HttpClientTestingModule  ]
    })
    .compileComponents();
  }));

 /* beforeEach(() => {
    fixture = TestBed.createComponent(CriarProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });*/

 
  it('should create catalogo component ', async (() => {
    fixture = TestBed.createComponent(CriarCatalogoComponent);
    component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  }));
});
