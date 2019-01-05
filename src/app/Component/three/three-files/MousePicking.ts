import { Raycaster, Vector3, Object3D, Vector2, Camera, Intersection } from 'three';

export default class MousePicking {

    private intersectedObjects: Intersection[];
    private mouseVector2: Vector2;
    private raycast: Raycaster;
    private camera: Camera;
    private targetObjects: Object3D[];
    private intersection: Intersection;
    //private canvas : HTMLCanvasElement

    constructor(camera: Camera, targetObjects: Object3D[]) {
        this.mouseVector2 = new Vector2();
        this.raycast = new Raycaster();
        this.camera = camera;
        this.targetObjects = targetObjects;
        // this.canvas = canvas;
    }

    public updateMouse(mouseX: number, mouseY: number): void {
        //Normalizar posição.
        this.mouseVector2.x = ((mouseX / window.innerWidth) * 2) - 1;
        this.mouseVector2.y = ((mouseY / window.innerHeight) * 2) + 1;
        this.raycast.setFromCamera(this.mouseVector2, this.camera);
    }

    public intersect() {
        this.intersectedObjects = this.raycast.intersectObjects(this.targetObjects);
        
        if (this.intersectedObjects.length > 0) {
            this.intersection = this.intersectedObjects[0];
        } else {
            this.intersection = null;
        }
    }

    public surfacePosition(): Vector3 {
        if (this.intersection == null) return null;
        var pos = new Vector3(0, 0, 0);
        pos.copy(this.intersection.point).add(this.intersection.face.normal);
        return pos;
    }


}