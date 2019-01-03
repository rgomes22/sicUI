import {Category} from './Category';
import { MaterialFinish } from './MaterialFinish';

export class Produto{
   productName: string;
   productId: string;
   productDescription: string;
   productCategory: Category;
   productMaterialWithFinish: MaterialFinish[];
   dimensions:[];
   subProducts:Produto[];

}