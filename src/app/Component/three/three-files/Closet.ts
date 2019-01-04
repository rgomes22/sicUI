import * as THREE from 'three';
import { Scene } from 'three';
import {Obj3D} from './interfaces/Obj3D';
export class Closet implements Obj3D {
   
    //private objMesh : THREE.Mesh;

    private cube : THREE.Mesh;

    private closet : THREE.Group;

    constructor(length : number , height : number, depth : number,thickness : number){

        this.closet = new THREE.Group();
        let material = new THREE.MeshPhongMaterial({ color:0x600907});

        /* TRASEIRA */
        let geometry = new THREE.CubeGeometry(length,height,thickness);
        this.cube = new THREE.Mesh(geometry,material);
    
        this.cube.position.x=length/2;
        this.cube.position.y=height/2+thickness;
        this.closet.add(this.cube);

        /* LATERIAIS */
        geometry = new THREE.CubeGeometry(thickness,height,depth);
        this.cube = new THREE.Mesh(geometry,material);
        this.cube.position.y=height/2+thickness;
        this.cube.position.z=depth/2;
        this.closet.add(this.cube);
        this.cube = new THREE.Mesh(geometry,material);
        this.cube.position.y=height/2+thickness;
        this.cube.position.z=depth/2;
        this.cube.position.x=length;
        this.closet.add(this.cube);

        /* TAMPOS */
        geometry = new THREE.CubeGeometry(length,thickness,depth);
        this.cube = new THREE.Mesh(geometry,material);
        this.cube.position.y=thickness/2;
        this.cube.position.z=depth/2;
        this.cube.position.x=length/2;
        this.closet.add(this.cube);

        this.cube = new THREE.Mesh(geometry,material);
        this.cube.position.y=height+thickness/2;
        this.cube.position.z=depth/2;
        this.cube.position.x=length/2;
        this.closet.add(this.cube);

    


        this.closet.receiveShadow=true;
        this.closet.castShadow=true;
    }

    

    mesh(){
        return this.closet; 
    }

    position(vector: THREE.Vector3) {
        this.closet.position.set(vector.x,vector.y,vector.z);
    }

    rotate(angle: number, vector: THREE.Vector3) {
        this.closet.rotateOnAxis(vector,angle);
    }

    public addClosetToScene(scene:Scene){
        scene.add(this.closet);
    }
}