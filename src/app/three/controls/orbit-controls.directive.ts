import { Directive,AfterViewInit,
  ContentChildren,ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  QueryList} from '@angular/core';

import * as THREE from 'three';
import '../js/EnableThree';

@Directive({
  selector: 'three-orbit-controls'
})

export class OrbitControlsDirective {

  constructor() { }

}
