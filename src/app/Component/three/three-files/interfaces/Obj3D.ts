import * as THREE from 'three';

export interface Obj3D {
    mesh(): THREE.Mesh;
    position(vector : THREE.Vector3);
    rotate(angle:number,vector: THREE.Vector3);
}