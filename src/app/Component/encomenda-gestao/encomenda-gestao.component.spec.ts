import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncomendaGestaoComponent } from './encomenda-gestao.component';

describe('EncomendaGestaoComponent', () => {
  let component: EncomendaGestaoComponent;
  let fixture: ComponentFixture<EncomendaGestaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncomendaGestaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncomendaGestaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
