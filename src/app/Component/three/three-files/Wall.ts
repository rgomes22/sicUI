import * as THREE from 'three';
import {Obj3D} from './interfaces/Obj3D';
import {Texturable} from './interfaces/Texturable';


export class Wall implements Obj3D , Texturable{

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

    applyTexture(texturePath: string) {
        var texture_floor = new THREE.TextureLoader().load(texturePath, function (texture) {
            texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
            texture.offset.set(0, 0);
            texture.repeat.set(12, 12);
        });
        this.objMesh.material =  new THREE.MeshPhongMaterial({ map: texture_floor });
    }
   

}