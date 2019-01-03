import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {Location, CommonModule } from '@angular/common';
import { CriarAcabamentoComponent } from './criar-acabamento.component';

describe('CriarAcabamentoComponent', () => {
  let component: CriarAcabamentoComponent;
  let fixture: ComponentFixture<CriarAcabamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriarAcabamentoComponent ],
      imports: [CommonModule]
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
