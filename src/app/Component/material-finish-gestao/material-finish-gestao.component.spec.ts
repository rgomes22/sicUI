import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialFinishGestaoComponent } from './material-finish-gestao.component';

describe('MaterialFinishGestaoComponent', () => {
  let component: MaterialFinishGestaoComponent;
  let fixture: ComponentFixture<MaterialFinishGestaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialFinishGestaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialFinishGestaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
