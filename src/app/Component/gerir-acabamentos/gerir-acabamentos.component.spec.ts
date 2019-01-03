import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GerirAcabamentosComponent } from './gerir-acabamentos.component';

describe('GerirAcabamentosComponent', () => {
  let component: GerirAcabamentosComponent;
  let fixture: ComponentFixture<GerirAcabamentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GerirAcabamentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GerirAcabamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
