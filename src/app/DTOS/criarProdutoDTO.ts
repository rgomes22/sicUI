import {Category} from '../model/Category';
export class criarProdutoDTO{
   productName: string;
   productDescription: string;
   productCategory: number;
   productMaterialWithFinish: number[];
   dimensions: Array<Array<number>>;
}