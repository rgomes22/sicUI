import * as THREE from 'three';
import { Scene } from 'three';
import {Obj3D} from './interfaces/Obj3D';
import { dependenciesFromGlobalMetadata } from '@angular/compiler/src/render3/r3_factory';

export class Hanger implements Obj3D{
    private hanger : THREE.Mesh;


    constructor(handlerRadius : number, length : number,thickness : number){
        let shelfMaterial = new THREE.MeshPhongMaterial({color: 0x559a99});
        let shelfGeometry = new THREE.CylinderGeometry(handlerRadius,handlerRadius,length-thickness,32);
        
        this.hanger  = new THREE.Mesh(shelfGeometry,shelfMaterial);
        this.hanger.rotateZ(Math.PI/2);
        this.hanger.receiveShadow=true;
        this.hanger.castShadow=true;
        
    }

    mesh(){
        return this.hanger; 
    }

    position(vector: THREE.Vector3) {
        this.hanger.position.set(vector.x,vector.y,vector.z);
    }

    rotate(angle: number, vector: THREE.Vector3) {
        this.hanger.rotateOnAxis(vector,angle);
    }

  
}