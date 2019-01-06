import { Category } from './Category';
import { Material } from './Material';
import { Finish } from './Finish';

export class Data{

    material: Material;
    length: number;
    height: number;
    depth: number;
    category: Category = new Category();
    finish: Finish;
    
}