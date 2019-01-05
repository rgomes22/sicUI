import * as THREE from 'three';
import { Scene } from 'three';
import {Obj3D} from '../interfaces/Obj3D';

export class AttachmentPlane implements Obj3D {
  
   
    //private objMesh : THREE.Mesh;

    private plane : THREE.Mesh;

    private length : number;

    private height : number;


    constructor(length : number , height :number){
        var geometry = new THREE.PlaneGeometry( length, height);
        var material = new THREE.MeshBasicMaterial( {visible : false} );
        this.plane = new THREE.Mesh( geometry, material );
    } 

    mesh(){
        return this.plane; 
    }

    position(vector: THREE.Vector3) {
        this.plane.position.set(vector.x,vector.y,vector.z);
    }

    rotate(angle: number, vector: THREE.Vector3) {
        this.plane.rotateOnAxis(vector,angle);
    }

}