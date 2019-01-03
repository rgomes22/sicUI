import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanoGestaoComponent } from './plano-gestao.component';

describe('PlanoGestaoComponent', () => {
  let component: PlanoGestaoComponent;
  let fixture: ComponentFixture<PlanoGestaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanoGestaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanoGestaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
