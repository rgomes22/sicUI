import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { CatalogoComponent } from './catalogo.component';
import { By } from '@angular/platform-browser';
import {
  RouterTestingModule
} from '@angular/router/testing';

describe('CatalogoComponent', () => {
  let component: CatalogoComponent;
  let fixture: ComponentFixture<CatalogoComponent>;
  let debugElement: DebugElement;
  let htmlElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogoComponent ],
      providers: [],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  }));

  /*beforeEach(() => {
    fixture = TestBed.createComponent(CatalogoComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();

    debugElement=fixture.debugElement.query(By.css('h3'));
    htmlElement = debugElement.nativeElement;

  });*/

  it('should create catalgo component ', async (() => {
    fixture = TestBed.createComponent(CatalogoComponent);
    component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  }));
});
