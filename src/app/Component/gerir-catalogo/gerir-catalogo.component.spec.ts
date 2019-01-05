import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { GerirCatalogoComponent } from './gerir-catalogo.component';
import { By } from '@angular/platform-browser';
import {
  RouterTestingModule
} from '@angular/router/testing';

describe('GerirColecaoComponent', () => {
  let component: GerirCatalogoComponent;
  let fixture: ComponentFixture<GerirCatalogoComponent>;
  let debugElement: DebugElement;
  let htmlElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GerirCatalogoComponent ],
      providers: [],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  }));

  /*beforeEach(() => {
    fixture = TestBed.createComponent(GerirColecaoComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();

    debugElement=fixture.debugElement.query(By.css('h3'));
    htmlElement = debugElement.nativeElement;

  });*/

  it('should create gerir-colecao component ', async (() => {
    fixture = TestBed.createComponent(GerirCatalogoComponent);
    component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  }));
});
