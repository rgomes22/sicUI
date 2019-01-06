import { AfterViewInit, Component, OnInit, ElementRef, Input, ViewChild, HostListener } from '@angular/core';
import * as THREE from 'three';
import { directiveDef } from '@angular/core/src/view';
import { DirectionalLight, AxesHelper } from 'three';
import OrbitControls from 'three-orbitcontrols';
import { StudioSetup } from './three-files/StudioSetup';
import { Wall } from './three-files/Objects3D/Wall';
import { Closet } from './three-files/Objects3D/Closet';

import { ColladaLoader } from "three/examples/js/loaders/ColladaLoader";
import { Shelf } from './three-files/Objects3D/Shelf';
import { Hanger } from './three-files/Objects3D/Hanger';

import MousePicking from './three-files/MousePicking';
import { Obj3D } from './three-files/interfaces/Obj3D';

import { ThreeServiceService } from '../../Services/three-Service.service';
import { Data } from 'src/app/model/Data';
import { Category } from 'src/app/model/Category';

import { CategoryServiceService } from '../../Services/category-service.service';
import { DrawerUnit } from './three-files/Objects3D/DrawerUnit';


@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ThreeComponent implements AfterViewInit, OnInit {

  private message: Data;



  /* HELPER PROPERTIES (PRIVATE PROPERTIES) */
  private camera: THREE.PerspectiveCamera;

  private controls: OrbitControls;

  private get canvas(): HTMLCanvasElement {
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

  private onPositioning: THREE.Object3D;

  private axis: AxesHelper;

  @Input() length: number = 400; //linha vermelha

  @Input() height: number = 700; //linha 

  @Input() depth: number = 200;

  public thickness: number = 2;

  //private plane: THREE.PlaneGeometry;

  @Input()
  public size: number = 200;

  private ratio: number = 6;

  public rootCategoria: Category;

  private armario: string = "Armario";

  private prateleira: string = "prateleira";

  private gavetas: string = "Gaveta";

  private cabide: string = "cabide";

  private onPicking : boolean = false;


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
  public farClippingPane: number = 4000;

  private dot: THREE.Points;

  private pick: MousePicking;

  private objectToBeAttached: Obj3D;

  private parentObject: Obj3D;

  /* DEPENDENCY INJECTION (CONSTRUCTOR) */
  constructor(private categoryService: CategoryServiceService,
    private ThreeService: ThreeServiceService) {
    this.render = this.render.bind(this);
  }


  ngOnInit() {
    this.ThreeService.currentMessage.subscribe(message => {
      this.message = message;this.draw();
    });
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
      10000
    );
    this.camera.position.z = 1200;
    this.camera.position.x = -100;
    this.camera.position.y = 500;
    this.camera.lookAt(this.scene.position)
    //this.controls = new OrbitControls(this.camera,this.renderer.domElement);


    this.axis = new THREE.AxesHelper(2000); // add axis to the scene
    this.pick = new MousePicking(this.camera, []);

    this.scene.add(this.axis);

  }

  private getAspectRatio() {
    return this.canvas.clientWidth / this.canvas.clientHeight;
  }

  private createStudio() {
    var studioSetup = new StudioSetup();
    studioSetup.addLightsToScene(this.scene);
    studioSetup.addWallsToScene(this.scene);
  }


  private addControls() {
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.maxPolarAngle = Math.PI / 2 - 0.0523598776;
    this.controls.maxDistance = 2500;
    this.controls.rotateSpeed = 1.0;
    this.controls.zoomSpeed = 1.2;
    this.controls.addEventListener('change', this.render);
  }


  private addCloset(material: string) {

    if (this.checkIfExist() == 0) {

      var closet = new Closet(this.message.length * this.ratio, this.message.height * this.ratio, this.message.depth * this.ratio, this.thickness);
      this.parentObject = closet;
      closet.applyTexture(material);
      this.pick = new MousePicking(this.camera, closet.attachSurfaces());
      this.onPicking = true;
      this.scene.add(this.parentObject.mesh());
    } else if (this.checkIfExist() == 1) {

      this.scene.remove(this.parentObject.mesh());
      var closet = new Closet(this.message.length * this.ratio, this.message.height * this.ratio, this.message.depth * this.ratio, this.thickness);
      this.parentObject = closet;
      closet.applyTexture(material);
      this.pick = new MousePicking(this.camera, closet.attachSurfaces());
      this.scene.add(this.parentObject.mesh());
    
    } else if (this.checkIfExist() == 2) {

      this.objectToBeAttached = null;
      this.onPicking = false;

    } else if (this.checkIfExist() == 3) {

      if (this.objectToBeAttached != null) {
        this.scene.remove(this.objectToBeAttached.mesh());
        var closet = new Closet(this.message.length * this.ratio, this.message.height * this.ratio, this.message.depth * this.ratio, this.thickness);
        this.objectToBeAttached = closet;
        this.onPicking = true;
        closet.applyTexture(material);
        this.scene.add(this.objectToBeAttached.mesh());
      } else {
        var closet = new Closet(this.message.length * this.ratio, this.message.height * this.ratio, this.message.depth * this.ratio, this.thickness);
        this.objectToBeAttached = closet;
        this.onPicking = true;
        closet.applyTexture(material);
        this.scene.add(this.objectToBeAttached.mesh());
      }
    }




  }

  private addShlef(material: string) {

  
   

    if (this.checkIfExist() == 0) {

      var shelf = new Shelf(this.message.length * this.ratio, this.message.height * this.ratio, this.message.depth * this.ratio, this.thickness);
      this.parentObject = shelf;
      shelf.applyTexture(material);
      this.onPicking = true;
      this.scene.add(this.parentObject.mesh());
    } else if (this.checkIfExist() == 1) {

      this.scene.remove(this.parentObject.mesh());
      var shelf = new Shelf(this.message.length * this.ratio, this.message.height * this.ratio, this.message.depth * this.ratio, this.thickness);
      this.parentObject = shelf;
      shelf.applyTexture(material);
      this.scene.add(this.parentObject.mesh());
    
    } else if (this.checkIfExist() == 2) {

      this.objectToBeAttached = null;
      this.onPicking = false;

    } else if (this.checkIfExist() == 3) {

      if (this.objectToBeAttached != null) {
        this.scene.remove(this.objectToBeAttached.mesh());
        var shelf = new Shelf(this.message.length * this.ratio, this.message.height * this.ratio, this.message.depth * this.ratio, this.thickness);
        this.objectToBeAttached = shelf;
        this.onPicking = true;
        shelf.applyTexture(material);
        this.scene.add(this.objectToBeAttached.mesh());
      } else {
        var shelf = new Shelf(this.message.length * this.ratio, this.message.height * this.ratio, this.message.depth * this.ratio, this.thickness);
        this.objectToBeAttached = shelf;
        this.onPicking = true;
        shelf.applyTexture(material);
        this.scene.add(this.objectToBeAttached.mesh());
      }
    }







  }

  private addHanger(material: string) {
    if (this.checkIfExist() == 0) {

      var shelf =  new Hanger(2, this.message.length* this.ratio, this.thickness);
      this.parentObject = shelf;
      shelf.applyTexture(material);
      this.onPicking = true;
      this.scene.add(this.parentObject.mesh());
    } else if (this.checkIfExist() == 1) {

      this.scene.remove(this.parentObject.mesh());
      var shelf =  new Hanger(2, this.message.length* this.ratio, this.thickness);
      this.parentObject = shelf;
      shelf.applyTexture(material);
      this.scene.add(this.parentObject.mesh());
    
    } else if (this.checkIfExist() == 2) {

      this.objectToBeAttached = null;
      this.onPicking = false;

    } else if (this.checkIfExist() == 3) {

      if (this.objectToBeAttached != null) {
        this.scene.remove(this.objectToBeAttached.mesh());
        var shelf  = new Hanger(2, this.message.length* this.ratio, this.thickness);
        this.objectToBeAttached = shelf;
        this.onPicking = true;
        shelf.applyTexture(material);
        this.scene.add(this.objectToBeAttached.mesh());
      } else {
        var shelf = new Hanger(2, this.message.length* this.ratio, this.thickness);;
        this.objectToBeAttached = shelf;
        this.onPicking = true;
        shelf.applyTexture(material);
        this.scene.add(this.objectToBeAttached.mesh());
      }
    }

  }

  private drawerUnitAdd(material: string) {
    if (this.checkIfExist() == 0) {

      var shelf =  new DrawerUnit(this.message.length * this.ratio, this.message.height * this.ratio, this.message.depth * this.ratio, this.thickness);
      this.parentObject = shelf;
      shelf.applyTexture(material);
      this.onPicking = true;
      this.scene.add(this.parentObject.mesh());
    } else if (this.checkIfExist() == 1) {

      this.scene.remove(this.parentObject.mesh());
      var shelf =  new DrawerUnit(this.message.length * this.ratio, this.message.height * this.ratio, this.message.depth * this.ratio, this.thickness);
      this.parentObject = shelf;
      shelf.applyTexture(material);
      this.scene.add(this.parentObject.mesh());
    
    } else if (this.checkIfExist() == 2) {

      this.objectToBeAttached = null;
      this.onPicking = false;

    } else if (this.checkIfExist() == 3) {

      if (this.objectToBeAttached != null) {
        this.scene.remove(this.objectToBeAttached.mesh());
        var shelf  = new DrawerUnit(this.message.length * this.ratio, this.message.height * this.ratio, this.message.depth * this.ratio, this.thickness);
        this.objectToBeAttached = shelf;
        this.onPicking = true;
        shelf.applyTexture(material);
        this.scene.add(this.objectToBeAttached.mesh());
      } else {
        var shelf = new DrawerUnit(this.message.length * this.ratio, this.message.height * this.ratio, this.message.depth * this.ratio, this.thickness);
        this.objectToBeAttached = shelf;
        this.onPicking = true;
        shelf.applyTexture(material);
        this.scene.add(this.objectToBeAttached.mesh());
      }
    }
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    this.pick.updateMouse(e.clientX, e.clientY, this.renderer);
    this.pick.intersect();
    var posV = this.pick.surfacePosition();
    if (posV != null && this.onPicking && this.objectToBeAttached !=null) {
      this.objectToBeAttached.position(posV);
    }
  }

  @HostListener('document:contextmenu', ['$event'])
  onClick(btn) {
    btn.preventDefault();
    this.onPicking = false;
}




  /**
   * Start the rendering loop
   */
  private startRenderingLoop() {
    /* Renderer */
    // Use canvas element in template
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas });
    this.renderer.setPixelRatio(devicePixelRatio);
    this.renderer.setSize(this.canvas.clientWidth * 0.7, this.canvas.clientHeight * 0.7);
    //document.getElementById("container").appendChild(this.renderer.domElement);
    //"objeto"

    let component: ThreeComponent = this;
    (function render() {
      requestAnimationFrame(render);
      component.animateCube();
      component.render();

    }());
  }

  private render() {
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

  /**Metodo para desenhar de acordo com a categoria */
  public draw() {

    if (this.message === undefined) return;

      this.getRootCategory(this.message.category, (c) => {
        this.addNewItem(c.categoryName, this.message.material);
      });

  }

  private getRootCategory(category: Category, callback: (c: Category) => any) {
    if (category.categoryParentId == null) {
      callback(category);
    } else {
      this.categoryService.getCategoryById(this.message.category.categoryParentId).subscribe(cat => this.getRootCategory(cat, callback));
    }
  }

  private addNewItem(categoria: string, material: string) {
    console.log(categoria , "CATEGORIA NEW ITEM");
    switch (categoria) {
      case this.armario: {
        this.addCloset(material);
        break;
      }
      case this.prateleira: {
        this.addShlef(material);
        break;
      }
      case this.cabide: {
        this.addHanger(material);
        break;
      }
      case this.gavetas: {
        this.drawerUnitAdd(material);
        break;
      }
      default: {
        console.log("Categoria nao existe");
        break;
      }
    }
  }


  private checkIfExist(): number {
    if (this.message.parent && this.message.create) {
      /**Inicio da cena  */
      return 0;
      //console.log("PAI && CREATE");

    } else if (this.message.parent && this.message.preview) {
      /**Edita o item pai */
      return 1;
      //console.log("PAI && PREVIEW");

    } else if (this.message.child && this.message.create) {
      /**Cria o item filho e ja nao o pode editar */
      return 2;
      //console.log("FILHO && CREATE");

    } else if (this.message.child && this.message.preview) {
      /**Altera o filho */
      return 3;
      //console.log("FILHO && PREVIEW");
    }

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
    this.startRenderingLoop();
    this.addControls();
  }

}
