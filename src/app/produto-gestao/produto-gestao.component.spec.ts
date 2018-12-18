import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoGestaoComponent } from './produto-gestao.component';

describe('ProdutoGestaoComponent', () => {
  let component: ProdutoGestaoComponent;
  let fixture: ComponentFixture<ProdutoGestaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutoGestaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoGestaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
