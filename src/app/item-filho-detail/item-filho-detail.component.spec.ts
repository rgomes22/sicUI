import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemFilhoDetailComponent } from './item-filho-detail.component';

describe('ItemFilhoDetailComponent', () => {
  let component: ItemFilhoDetailComponent;
  let fixture: ComponentFixture<ItemFilhoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemFilhoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemFilhoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
