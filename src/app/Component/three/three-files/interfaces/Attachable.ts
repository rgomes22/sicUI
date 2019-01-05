import {Object3D} from 'three';

export default interface Attachable{
    attachSurfaces(): Object3D[];
    
}