import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarAcabamentoComponent } from './criar-acabamento.component';

describe('CriarAcabamentoComponent', () => {
  let component: CriarAcabamentoComponent;
  let fixture: ComponentFixture<CriarAcabamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriarAcabamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarAcabamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
