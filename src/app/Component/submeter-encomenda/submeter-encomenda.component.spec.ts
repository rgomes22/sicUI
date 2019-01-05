import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmeterEncomendaComponent } from './submeter-encomenda.component';

describe('SubmeterEncomendaComponent', () => {
  let component: SubmeterEncomendaComponent;
  let fixture: ComponentFixture<SubmeterEncomendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmeterEncomendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmeterEncomendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
