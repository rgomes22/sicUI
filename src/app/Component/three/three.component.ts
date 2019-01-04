import {  AfterViewInit, Component, OnInit, ElementRef, Input, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { directiveDef } from '@angular/core/src/view';
import { DirectionalLight, AxesHelper } from 'three';
import OrbitControls from 'three-orbitcontrols';
import {StudioSetup} from './three-files/StudioSetup';
import {Wall} from './three-files/Wall';
import { Closet } from './three-files/Closet';

import {ColladaLoader } from "three/examples/js/loaders/ColladaLoader";
import { Shelf } from './three-files/Shelf';
import { Hanger } from './three-files/Hanger';
import { DrawerUnit } from './three-files/DrawerUnit';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ThreeComponent implements AfterViewInit {
  /* HELPER PROPERTIES (PRIVATE PROPERTIES) */
  private camera: THREE.PerspectiveCamera;

  private controls: OrbitControls;

  private get canvas() : HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }
  
  @ViewChild('canvas')
  private canvasRef: ElementRef;

  private cube: THREE.Mesh;

  private renderer: THREE.WebGLRenderer;

  private scene: THREE.Scene;

  private ambientLight: THREE.AmbientLight;

  private pointLight: THREE.PointLight;

  private directionalLight: THREE.DirectionalLight;

  private plane: THREE.Mesh;

  private axis: AxesHelper;

  public length: number = 400; //linha vermelha

  public height: number = 700; //linha 

  public depth: number = 200;

  public thickness: number = 2;

  //private plane: THREE.PlaneGeometry;

   /* CUBE PROPERTIES */
  @Input()
  public rotationSpeedX: number = 0.005;

  @Input()
  public rotationSpeedY: number = 0.01;

  @Input()
  public size: number = 200;

  //@Input()
  //public texture: string = '/assets/textures/crate.gif';


  /* STAGE PROPERTIES */
  @Input()
  public cameraZ: number = 400;

  @Input()
  public cameraY: number = 10;

  @Input()
  public cameraX: number = 0;

  @Input()
  public fieldOfView: number = 70;

  @Input('nearClipping')
  public nearClippingPane: number = 1;

  @Input('farClipping')
  public farClippingPane: number = 4000

  /* DEPENDENCY INJECTION (CONSTRUCTOR) */
  constructor() {
    this.render = this.render.bind(this);
   }

  /**
   * Animate the cube
   */
  private animateCube() {
//    this.cube.rotation.x += this.rotationSpeedX;
  //  this.cube.rotation.y += this.rotationSpeedY;
  }



  /**
   * Create the scene
   */
  private createScene() {
    /* Scene */
    this.scene = new THREE.Scene();

    /* Camera */
    let aspectRatio = this.getAspectRatio();
    this.camera = new THREE.PerspectiveCamera(
      90,
      aspectRatio,
      1,
      1000000
    );
    this.camera.position.z = 1200;
    this.camera.position.x = -100;
    this.camera.position.y = 500;
    this.camera.lookAt(this.scene.position)
    //this.controls = new OrbitControls(this.camera,this.renderer.domElement);


    this.axis = new THREE.AxesHelper(2000); // add axis to the scene
    this.scene.add(this.axis);
    
  }

  private getAspectRatio() {
    return this.canvas.clientWidth / this.canvas.clientHeight;
  }

  private createStudio (){
    var studioSetup = new StudioSetup();
    studioSetup.addLightsToScene(this.scene);
    studioSetup.addWallsToScene(this.scene);
  }

  
  private addControls (){
    this.controls = new OrbitControls(this.camera,this.renderer.domElement);
    this.controls.rotateSpeed = 1.0;
    this.controls.zoomSpeed = 1.2;
    this.controls.addEventListener('change', this.render);
  }

  private addCloset(){
    var closet = new Closet(this.length,this.height,this.depth,this.thickness);
    closet.addClosetToScene(this.scene);
  }

  private addShlef(){

    var shelf = new Shelf(this.length,this.thickness,this.depth,this.thickness);

    /*Tirar as posiçoes depois */
    var a = new THREE.Vector3( this.length/2, 500, this.depth/2 );
    shelf.position(a);
    /**** */

    shelf.addShelfToScene(this.scene);
  }

  private addHanger(){
    var hanger = new Hanger (2,this.length,this.thickness);

    /*Tirar as posiçoes depois */
    var a = new THREE.Vector3( this.length/2, 600, this.depth/2 );
    hanger.position(a);
    /**** */

    hanger.addHangerToScene(this.scene);

  }

  private addDrawer(){
    var drawerUnit = new DrawerUnit(this.length,100,this.depth,this.thickness);
    /*Tirar as posiçoes depois */
    var a = new THREE.Vector3( 0, 300, 0);
    drawerUnit.position(a);
    /**** */

    drawerUnit.addDrawerUnitToScene(this.scene);
  }

  private addDoor(){

  }

 

  
  /**
   * Start the rendering loop
   */
  private startRenderingLoop() {
    /* Renderer */
    // Use canvas element in template
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas });
    this.renderer.setPixelRatio(devicePixelRatio);
    this.renderer.setSize(this.canvas.clientWidth * 0.7, this.canvas.clientHeight*0.7);
    //document.getElementById("container").appendChild(this.renderer.domElement);
    //"objeto"
   
    let component: ThreeComponent = this;
    (function render() {
      requestAnimationFrame(render);
      component.animateCube();
      component.render();
      
    }());
  }

  private render (){
    this.renderer.render(this.scene, this.camera);
  }

  
  /* EVENTS */

  /**
   * Update scene after resizing. 
   */
  public onResize() {
    this.camera.aspect = this.getAspectRatio();
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
  }

  
  /* LIFECYCLE */

  /**
   * We need to wait until template is bound to DOM, as we need the view
   * dimensions to create the scene. We could create the cube in a Init hook,
   * but we would be unable to add it to the scene until now.
   */
  public ngAfterViewInit() {
    this.createScene();
    this.createStudio();
    this.addCloset();
    this.addShlef();
    this.addHanger();
    this.addDrawer();
    this.addDoor();
    this.startRenderingLoop();
    this.addControls();
  }

}
