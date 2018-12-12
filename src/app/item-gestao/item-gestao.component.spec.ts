import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {  RouterTestingModule} from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ItemGestaoComponent } from './item-gestao.component';

describe('ItemGestaoComponent', () => {
  let component: ItemGestaoComponent;
  let fixture: ComponentFixture<ItemGestaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemGestaoComponent ],
      imports: [ RouterTestingModule, HttpClientTestingModule  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemGestaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create catalgo component ', async (() => {
    fixture = TestBed.createComponent(ItemGestaoComponent);
    component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  }));
});
