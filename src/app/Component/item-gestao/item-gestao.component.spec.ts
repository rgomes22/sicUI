import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemGestaoComponent } from './item-gestao.component';

describe('ItemGestaoComponent', () => {
  let component: ItemGestaoComponent;
  let fixture: ComponentFixture<ItemGestaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemGestaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemGestaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
