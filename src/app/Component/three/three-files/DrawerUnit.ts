import * as THREE from 'three';
import { Scene } from 'three';
import {Obj3D} from './interfaces/Obj3D';
import { dependenciesFromGlobalMetadata } from '@angular/compiler/src/render3/r3_factory';

export class DrawerUnit implements Obj3D{
    private unit : THREE.Group;
    private cube : THREE.Mesh;

    constructor(length : number, height : number, depth : number,thickness : number){

        let material = new THREE.MeshPhongMaterial({color: 0x559a99});
        let geometry = new THREE.CubeGeometry(length,height,depth);
        
        this.cube = new THREE.Mesh(geometry,material);
    
        this.cube.position.x=length/2;
        this.cube.position.y=height/2+thickness;
        this.unit.add(this.cube);

        /* LATERIAIS */
        geometry = new THREE.CubeGeometry(thickness,height,depth);
        this.cube = new THREE.Mesh(geometry,material);
        this.cube.position.y=height/2+thickness;
        this.cube.position.z=depth/2;
        this.unit.add(this.cube);
        this.cube = new THREE.Mesh(geometry,material);
        this.cube.position.y=height/2+thickness;
        this.cube.position.z=depth/2;
        this.cube.position.x=length;
        this.unit.add(this.cube);

        /* TAMPOS */
        geometry = new THREE.CubeGeometry(length,thickness,depth);
        this.cube = new THREE.Mesh(geometry,material);
        this.cube.position.y=thickness/2;
        this.cube.position.z=depth/2;
        this.cube.position.x=length/2;
        this.unit.add(this.cube);

        this.cube = new THREE.Mesh(geometry,material);
        this.cube.position.y=height+thickness/2;
        this.cube.position.z=depth/2;
        this.cube.position.x=length/2;
        this.unit.add(this.cube);

    


        this.unit.receiveShadow=true;
        this.unit.castShadow=true;
        
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

    public addShelfToScene(scene:Scene){
        scene.add(this.unit);
    }
}