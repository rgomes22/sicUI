import { MeshPhongMaterial ,TextureLoader,Material} from 'three';
export default function changeMaterial(material:string) : Material{

    switch(material){
        case "madeira" :
        return  new MeshPhongMaterial({ map: new TextureLoader().load("assets/material/madeira.jpg") ,transparent : false,opacity:1,blending:1});
        case "metal":
        return new MeshPhongMaterial({ map: new TextureLoader().load("assets/material/metal.jpg") ,transparent : false,opacity:1,blending:1});
        case "vidro":
        return new MeshPhongMaterial({ map: new TextureLoader().load("assets/material/vidro.jpg") ,transparent : true,opacity:0.5,blending:1});
        default:
        return new MeshPhongMaterial({ color:0x600907});
    }
   
}