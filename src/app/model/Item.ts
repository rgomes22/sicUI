import { Encomenda } from './Encomenda';

export class Item{
    id: string;
    nome: string;
    descricao: string;
    idproduto: string;

    width: number;
    height: number;
    depth: number;

    material: string;
    finish: string;
    price: string;
    itemFilhos : Item[];
    child: boolean;
    editavel: boolean;
}