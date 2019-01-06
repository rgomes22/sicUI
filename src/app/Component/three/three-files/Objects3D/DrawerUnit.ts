import * as THREE from 'three';
import { Scene } from 'three';
import {Obj3D} from '../interfaces/Obj3D';
import { dependenciesFromGlobalMetadata } from '@angular/compiler/src/render3/r3_factory';
import changeMaterial from '../functions/MaterialChange';

export class DrawerUnit implements Obj3D{
    private unit : THREE.Group;
    private part : THREE.Mesh;
    private drawerQuant: number = 3;
    private drawer : THREE.Mesh;
    private parts : THREE.Mesh[];

    constructor(length : number, height : number, depth : number,thickness : number,nome: string){
        this.unit=new THREE.Group();
        let material = new THREE.MeshPhongMaterial({color: 0x559a99});
        let geometry = new THREE.CubeGeometry(length-thickness,height,thickness);
        this.parts = new Array();
        this.part = new THREE.Mesh(geometry,material);
    
        this.part.position.x=length/2;
        this.part.position.y=height/2+thickness;
        this.part.position.z=thickness;
        this.parts.push(this.part);
        this.unit.add(this.part);

        /* LATERIAIS */
        
        geometry = new THREE.CubeGeometry(thickness,height,depth);
        this.part = new THREE.Mesh(geometry,material);
        this.part.position.y=height/2+thickness;
        this.part.position.z=depth/2;
        this.part.position.x=thickness;
        this.parts.push(this.part);
        this.unit.add(this.part);
        
        this.part = new THREE.Mesh(geometry,material);
        this.part.position.y=height/2+thickness;
        this.part.position.z=depth/2;
        this.part.position.x=length-thickness;
        this.parts.push(this.part);
        this.unit.add(this.part);
        
        /* TAMPOS */
        
        geometry = new THREE.CubeGeometry(length-thickness,thickness,depth);
        this.part = new THREE.Mesh(geometry,material);
        this.part.position.y=thickness/2;
        this.part.position.z=depth/2;
        this.part.position.x=length/2;
        this.parts.push(this.part);
        this.unit.add(this.part);

        this.part = new THREE.Mesh(geometry,material);
        this.part.position.y=height+thickness/2;
        this.part.position.z=depth/2;
        this.part.position.x=length/2;
        this.parts.push(this.part);
        this.unit.add(this.part);

    


        this.unit.receiveShadow=true;
        this.unit.castShadow=true;

        this.addDrawers(length,height/this.drawerQuant,depth,thickness);
        
    }

    private addDrawers(length : number, height : number, depth : number,thickness : number){
        let drawerMaterial = new THREE.MeshPhongMaterial({color: 0xffc700});
        let drawerGeometry = new THREE.CubeGeometry(length-thickness,height-(thickness/2),depth-(thickness/2));
        
        


        /**Ter cuidado com a posiçao das gavetas tera de ser mudado? */
        for(var i =0;i<this.drawerQuant;i++){
           
            this.drawer = new THREE.Mesh(drawerGeometry,drawerMaterial);
            this.drawer.position.set(length/2,(height/2)+i*height,depth/2);
            this.parts.push(this.drawer);
            this.unit.add(this.drawer);
            
        }
    }

    mesh(){
        return this.unit; 
    }

    position(vector: THREE.Vector3) {
        this.unit.position.set(vector.x,vector.y,vector.z);
    }

    rotate(angle: number, vector: THREE.Vector3) {
        this.unit.rotateOnAxis(vector,angle);
    }

    applyTexture(texturePath: string) {
        this.parts.forEach(part => part.material = changeMaterial(texturePath));
    }

    public addDrawerUnitToScene(scene:Scene){
        scene.add(this.unit);
    }
}