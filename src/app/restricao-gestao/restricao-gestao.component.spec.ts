import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestricaoGestaoComponent } from './restricao-gestao.component';

describe('RestricaoGestaoComponent', () => {
  let component: RestricaoGestaoComponent;
  let fixture: ComponentFixture<RestricaoGestaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestricaoGestaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestricaoGestaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
