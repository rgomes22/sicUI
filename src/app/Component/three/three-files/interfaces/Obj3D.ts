import * as THREE from 'three';

export interface Obj3D {
    mesh(): THREE.Object3D;
    position(vector : THREE.Vector3) :void ;
    rotate(angle:number,vector: THREE.Vector3) : void;
}