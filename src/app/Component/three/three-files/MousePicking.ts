import { Raycaster, Vector3, Object3D, Vector2, Camera, Intersection ,Renderer} from 'three';


export default class MousePicking {

    private intersectedObjects: Intersection[];
    private mouseVector2: Vector2;
    private raycast: Raycaster;
    private camera: Camera;
    private targetObjects: Object3D[];
    private intersection: Intersection;


    constructor(camera: Camera, targetObjects: Object3D[]) {
        this.mouseVector2 = new Vector2();
        this.raycast = new Raycaster();
        this.camera = camera;
        this.targetObjects = targetObjects;
       
    }

    public updateMouse(mouseX: number, mouseY: number,renderer : Renderer): void {
        //Normalizar posição.
        var rect = renderer.domElement.getBoundingClientRect();
        this.mouseVector2.x = ( ( mouseX - rect.left ) / ( rect.width - rect.left ) ) * 2 - 1;
        this.mouseVector2.y = - ( ( mouseY - rect.top ) / ( rect.bottom - rect.top) ) * 2 + 1;
        //console.log(this.mouseVector2);
        this.raycast.setFromCamera(this.mouseVector2, this.camera);
    }

    public changeTargets(targetObjects: Object3D[]){
        this.targetObjects = targetObjects;
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