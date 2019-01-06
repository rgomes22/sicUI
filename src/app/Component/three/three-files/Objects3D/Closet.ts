import * as THREE from 'three';
import { Scene } from 'three';
import {Obj3D} from '../interfaces/Obj3D';
import { Texturable } from '../interfaces/Texturable';
import Attachable from '../interfaces/Attachable';
import changeMaterial from '../functions/MaterialChange';
export class Closet implements Obj3D ,Texturable,Attachable {
 
    //private objMesh : THREE.Mesh;

    private cube : THREE.Mesh;

    private closet : THREE.Group;

    private parts : THREE.Mesh[];

    private attachPlane : THREE.Mesh;

    constructor(length : number , height : number, depth : number,thickness : number){

        this.closet = new THREE.Group();

        this.parts = new Array();

        let material = new THREE.MeshPhongMaterial({ color:0x600907});

        /* TRASEIRA */
        let geometry = new THREE.CubeGeometry(length,height,thickness);
        this.cube = new THREE.Mesh(geometry,material);
    
        this.cube.position.x=length/2;
        this.cube.position.y=height/2+thickness;
        this.parts.push(this.cube);
        this.closet.add(this.cube);

        /* LATERIAIS */
        geometry = new THREE.CubeGeometry(thickness,height,depth);
        this.cube = new THREE.Mesh(geometry,material);
        this.cube.position.y=height/2+thickness;
        this.cube.position.z=depth/2;
        this.parts.push(this.cube);
        this.closet.add(this.cube);
        this.cube = new THREE.Mesh(geometry,material);
        this.cube.position.y=height/2+thickness;
        this.cube.position.z=depth/2;
        this.cube.position.x=length;
        this.parts.push(this.cube);
        this.closet.add(this.cube);

        /* TAMPOS */
        geometry = new THREE.CubeGeometry(length,thickness,depth);
        this.cube = new THREE.Mesh(geometry,material);
        this.cube.position.y=thickness/2;
        this.cube.position.z=depth/2;
        this.cube.position.x=length/2;
        this.parts.push(this.cube);
        this.closet.add(this.cube);

        this.cube = new THREE.Mesh(geometry,material);
        this.cube.position.y=height+thickness/2;
        this.cube.position.z=depth/2;
        this.cube.position.x=length/2;
        this.parts.push(this.cube);
        this.closet.add(this.cube);

        //AttachmentPlane
        var planeGeometry = new THREE.PlaneGeometry( length, height);
        var planeMaterial = new THREE.MeshBasicMaterial( {wireframe : false , visible:false} );
        this.attachPlane = new THREE.Mesh( planeGeometry, planeMaterial );
        this.attachPlane.position.x=length/2;
        this.attachPlane.position.y=height/2+thickness;
        this.closet.add(this.attachPlane);

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

    applyTexture(texturePath: string) {
        this.parts.forEach(part => part.material = changeMaterial(texturePath));
    }

    attachSurfaces(): THREE.Object3D[] {
        return [this.attachPlane];
    }

}