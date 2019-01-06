import * as THREE from 'three';
import { Scene } from 'three';
import {Obj3D} from '../interfaces/Obj3D';
import { dependenciesFromGlobalMetadata } from '@angular/compiler/src/render3/r3_factory';
import changeMaterial from '../functions/MaterialChange';

export class Door implements Obj3D{
    private door : THREE.Mesh;
    

    constructor(thickness : number, height : number, depth : number){
        let doorMaterial = new THREE.MeshPhongMaterial({color: 0x559a99});
        let doorGeometry = new THREE.CubeGeometry(thickness,height,depth);
        
        this.door  = new THREE.Mesh(doorGeometry,doorMaterial);

        this.door.receiveShadow=true;
        this.door.castShadow=true;
        
    }

    mesh() : THREE.Mesh{
        return this.door; 
    }

    position(vector: THREE.Vector3) {
        this.door.position.set(vector.x,vector.y,vector.z);
    }

    rotate(angle: number, vector: THREE.Vector3) {
        this.door.rotateOnAxis(vector,angle);
    }

    applyTexture(texturePath: string) {
        this.door.material = changeMaterial(texturePath);
    }

  
}