import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAcabamentosComponent } from './edit-acabamentos.component';

describe('EditAcabamentosComponent', () => {
  let component: EditAcabamentosComponent;
  let fixture: ComponentFixture<EditAcabamentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAcabamentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAcabamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
