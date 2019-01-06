import { Produto } from './Produto';

export class Catalogo{
    catalogId: string;
    catalogName: string;
    catalogDescription: string;
    products: Produto[];
}