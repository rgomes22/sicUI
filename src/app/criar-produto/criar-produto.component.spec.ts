import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { CriarProdutoComponent } from './criar-produto.component';
import {  RouterTestingModule} from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('CriarProdutoComponent', () => {
  let component: CriarProdutoComponent;
  let fixture: ComponentFixture<CriarProdutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriarProdutoComponent],
      imports: [ RouterTestingModule, HttpClientTestingModule  ]
    })
    .compileComponents();
  }));

 /* beforeEach(() => {
    fixture = TestBed.createComponent(CriarProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });*/

 
  it('should create catalgo component ', async (() => {
    fixture = TestBed.createComponent(CriarProdutoComponent);
    component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  }));
});
