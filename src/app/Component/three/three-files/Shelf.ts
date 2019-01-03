import * as THREE from 'three';
import { Scene } from 'three';
import {Obj3D} from './interfaces/Obj3D';

export class Shelf implements Obj3D{
    private shelf : THREE.Mesh;


    constructor(){
        
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

    public addShelfToScene(scene:Scene){
        scene.add(this.shelf);
    }
}