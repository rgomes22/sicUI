import * as THREE from 'three';
import { Scene } from 'three';
import {Obj3D} from '../interfaces/Obj3D';
import { dependenciesFromGlobalMetadata } from '@angular/compiler/src/render3/r3_factory';
import changeMaterial from '../functions/MaterialChange';

export class Shelf implements Obj3D{
    private shelf : THREE.Mesh;


    constructor(length : number, height : number, depth : number,thickness : number,nome: string){
        let shelfMaterial = new THREE.MeshPhongMaterial({color: 0x559a99});
        let shelfGeometry = new THREE.CubeGeometry(length-thickness,height,depth);
        
        this.shelf  = new THREE.Mesh(shelfGeometry,shelfMaterial);
        /*this.shelf.position.y = ;
        this.shelf.position.z=depth/2;
        this.shelf.position.x=length/2;*/
        this.shelf.receiveShadow=true;
        this.shelf.castShadow=true;
        
    }

    mesh(){
        return this.shelf; 
    }

    position(vector: THREE.Vector3) {
        this.shelf.position.set(vector.x,vector.y,vector.z);
    }

    rotate(angle: number, vector: THREE.Vector3) {
        this.shelf.rotateOnAxis(vector,angle);
    }

    applyTexture(texturePath: string) {
        this.shelf.material = changeMaterial(texturePath);
    }

}