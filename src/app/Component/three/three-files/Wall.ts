import * as THREE from 'three';
import {Obj3D} from './interfaces/Obj3D';

export class Wall implements Obj3D {
   
    private objMesh : THREE.Mesh;

    constructor(weight : number , height : number){
        var planeGeometry = new THREE.PlaneGeometry(weight,height);
        var planeMaterial = new THREE.MeshPhongMaterial( {color:0x282627,side: THREE.DoubleSide});
        this.objMesh = new THREE.Mesh(planeGeometry,planeMaterial);
    }

    mesh(){
        return this.objMesh; 
    }

    position(vector: THREE.Vector3) {
        this.objMesh.position.set(vector.x,vector.y,vector.z);
    }

    rotate(angle: number, vector: THREE.Vector3) {
        this.objMesh.rotateOnAxis(vector,angle);
    }
}