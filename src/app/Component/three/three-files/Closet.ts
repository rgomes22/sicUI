import * as THREE from 'three';
import {Obj3D} from './interfaces/Obj3D';
export class Closet implements Obj3D {
   
    //private objMesh : THREE.Mesh;

    private cube : THREE.Mesh;

    private closet : THREE.Group;

    constructor(length : number , height : number, depth : number){
        let espessura = 2;
        this.closet = new THREE.Group();
        let material = new THREE.MeshPhongMaterial({ color:0x600907});

        /* TRASEIRA */
        let geometry = new THREE.CubeGeometry(length,height,espessura);
        this.cube = new THREE.Mesh(geometry,material);
    
        this.cube.position.x=length/2;
        this.cube.position.y=height/2+espessura;
        this.closet.add(this.cube);

        /* LATERIAIS */
        geometry = new THREE.CubeGeometry(espessura,height,depth);
        this.cube = new THREE.Mesh(geometry,material);
        this.cube.position.y=height/2+espessura;
        this.cube.position.z=depth/2;
        this.closet.add(this.cube);
        this.cube = new THREE.Mesh(geometry,material);
        this.cube.position.y=height/2+espessura;
        this.cube.position.z=depth/2;
        this.cube.position.x=length;
        this.closet.add(this.cube);

        /* TAMPOS */
        geometry = new THREE.CubeGeometry(length,espessura,depth);
        this.cube = new THREE.Mesh(geometry,material);
        this.cube.position.y=espessura/2;
        this.cube.position.z=depth/2;
        this.cube.position.x=length/2;
        this.closet.add(this.cube);

        this.cube = new THREE.Mesh(geometry,material);
        this.cube.position.y=height+espessura/2;
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
}