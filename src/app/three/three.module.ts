import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerspectiveCameraDirective } from './camera/perspective-camera.directive';
import { OrbitControlsDirective } from './controls/orbit-controls.directive';
import { GridHelperDirective } from './helpers/grid-helper.directive';
import { AxesHelperDirective } from './helpers/axes-helper.directive';
import { PointLightDirective } from './light/point-light.directive';
import { SceneDirective } from './scene.directive';
import { RendererComponent } from './renderer/renderer.component';
import { OBJLoader } from 'three';

@NgModule({
  declarations: [PerspectiveCameraDirective, OrbitControlsDirective, GridHelperDirective, AxesHelperDirective, PointLightDirective, SceneDirective, RendererComponent],
  imports: [
    CommonModule
  ],
  exports: [
    PerspectiveCameraDirective,
    OrbitControlsDirective,
    GridHelperDirective,
    AxesHelperDirective,
    PointLightDirective,
    SceneDirective,
    RendererComponent
  ]
})
export class ThreeModule { }
