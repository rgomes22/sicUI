import { Vector3, PointLight, AmbientLight, SpotLight, Scene } from 'three';
import { Wall } from './Wall';

export class StudioSetup {

    private pointLight1: PointLight;
    private pointLight2: PointLight;
    private pointLight3: PointLight;
    private pointLight4: PointLight;

    private spotlight1: SpotLight;
    private spotlight2: SpotLight;

    private ambienteLight: AmbientLight;

    private frontWall: Wall;
    private backWall: Wall;
    private leftWall: Wall;
    private rightWall: Wall;
    private floor: Wall;
    private ceiling : Wall;


    constructor() {
        this.pointLight1 = StudioSetup.pointLightSetup(new Vector3(2500, 2700, 2500), 0xffffff);
        this.pointLight2 = StudioSetup.pointLightSetup(new Vector3( -2500, 2700, 2500), 0xffffff);
        this.pointLight3 = StudioSetup.pointLightSetup(new Vector3(2500, 2700, -2500), 0xffffff);
        this.pointLight4 = StudioSetup.pointLightSetup(new Vector3(-2500, 2700, -2500), 0xffffff);

        this.spotlight1 = StudioSetup.spotLightSetup(new Vector3(1500, 3000, 0), 0xffffff);
        this.spotlight2 = StudioSetup.spotLightSetup(new Vector3(-1500, 3000, 0), 0xffffff);

        this.ambienteLight = new AmbientLight(0xffffff, 0.3);

        this.frontWall = new Wall(5000, 5000);
        this.backWall = new Wall(5000, 5000);
        this.leftWall = new Wall(5000, 5000);
        this.rightWall = new Wall(5000, 5000);
        this.floor = new Wall(5000,5000);
        this.ceiling = new Wall(5000,5000);


    }

    private static spotLightSetup(vector: Vector3, color: number): SpotLight {
        var light = new SpotLight(color, 1, 5000);
        light.castShadow = true;
        light.position.set(vector.x, vector.y, vector.z);
        light.penumbra = 0.9;
        light.shadow.camera.near = 1000;
        light.shadow.camera.far = 6000;
        light.shadow.camera.fov = 30;
        return light;
    }

    private static pointLightSetup(vector: Vector3, color: number): PointLight {
        var light = new SpotLight(color, 1, 5000);
        light.position.set(vector.x, vector.y, vector.z);
        return light;
    }


    public addLightsToScene(scene: Scene) {
        scene.add(this.pointLight1);
        scene.add(this.pointLight2);
        scene.add(this.pointLight3);
        scene.add(this.pointLight4);

        scene.add(this.spotlight1);
        scene.add(this.spotlight2);

        scene.add(this.ambienteLight);
    }

    public addWallsToScene(scene: Scene) {
        this.leftWall.position(new Vector3(2500,2000,0));
        this.leftWall.rotate(- Math.PI / 2,new Vector3(0,1,0));

        this.rightWall.position(new Vector3(-2500,2000,0)); 
        this.rightWall.rotate(Math.PI / 2,new Vector3(0,1,0)); 

        this.backWall.position(new Vector3(0,2000,2500));
        this.backWall.rotate(Math.PI,new Vector3(0,1,0));

        this.frontWall.position(new Vector3(0,2000,-2500));
        //this.frontWall

        this.floor.position(new Vector3(0,0,0));
        this.floor.rotate(-Math.PI/2,new Vector3(1,0,0));
        
        this.ceiling.position(new Vector3(0,3000,0));
        this.ceiling.rotate(Math.PI/2,new Vector3(1,0,0));

        this.floor.applyTexture("assets/material/floor.jpg");
        this.frontWall.applyTexture("assets/material/wall.jpg");
        this.backWall.applyTexture("assets/material/wall.jpg");
        this.rightWall.applyTexture("assets/material/wall.jpg");
        this.leftWall.applyTexture("assets/material/wall.jpg");
        this.ceiling.applyTexture("assets/material/ceiling.jpg");



        scene.add(this.leftWall.mesh());
        scene.add(this.rightWall.mesh());
        scene.add(this.backWall.mesh());
        scene.add(this.frontWall.mesh());
        scene.add(this.floor.mesh());
        scene.add(this.ceiling.mesh());
    }
}
