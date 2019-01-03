import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoGestaoComponent } from './produto-gestao.component';
import { ProdutosService } from '../../Services/produtos.service';
import {  RouterTestingModule} from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ProdutoGestaoComponent', () => {
  let component: ProdutoGestaoComponent;
  let fixture: ComponentFixture<ProdutoGestaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutoGestaoComponent ],
      imports: [ RouterTestingModule, HttpClientTestingModule  ]
    }).compileComponents();
    


  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoGestaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*it('should create catalgo component ', async (() => {
    fixture = TestBed.createComponent(ProdutoGestaoComponent);
    component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  }));*/
  
});

