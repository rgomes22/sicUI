import { Raycaster, Vector3, Object3D } from 'three';

export default function colisao(pos: Vector3, objects: Object3D[], comprimento: number, altura: number) {

    var farX = comprimento / 2;
    var farY = altura / 2;

    var center = pos.clone();
    center.x += farX;
    var rayTopoDireita = new Raycaster(center, new Vector3(0, 1, 0), 0, farY);
    var rayAbaixoDireita = new Raycaster(center, new Vector3(0, -1, 0), 0, farY);

    center = pos.clone();
    center.x -= farX;
    var rayTopoEsquerda = new Raycaster(center, new Vector3(0, 1, 0), 0, farY);
    var rayAbaixoEsquerda = new Raycaster(center, new Vector3(0, -1, 0), 0, farY);

    center = pos.clone();
    center.y += farY;
    var rayEsquerdaTopo = new Raycaster(center, new Vector3(-1, 0, 0), 0, farX);

    var rayDireitaTopo = new Raycaster(center, new Vector3(1, 0, 0), 0, farX);

    center = pos.clone();
    center.y -= farY;
    var rayEsquerdaAbaixo = new Raycaster(center, new Vector3(-1, 0, 0), 0, farX);

    var rayDireitaAbaixo = new Raycaster(center, new Vector3(1, 0, 0), 0, farX);



    if (rayTopoDireita.intersectObjects(objects).length > 0) {
        return true;
    }
    if (rayAbaixoDireita.intersectObjects(objects).length > 0) {
        return true;
    }
    if (rayTopoEsquerda.intersectObjects(objects).length > 0) {
        return true;
    }
    if (rayAbaixoEsquerda.intersectObjects(objects).length > 0) {
        return true;
    }
    if (rayEsquerdaTopo.intersectObjects(objects).length > 0) {
        return true;
    }
    if (rayDireitaTopo.intersectObjects(objects).length > 0) {
        return true;
    }
    if (rayEsquerdaAbaixo.intersectObjects(objects).length > 0) {
        return true;
    }
    if (rayDireitaAbaixo.intersectObjects(objects).length > 0) {
        return true;
    }

    return false;

}