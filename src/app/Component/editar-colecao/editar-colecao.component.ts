import { Component, OnInit, Input } from '@angular/core';
import { Produto } from '../../model/Produto';
import { ProdutosService } from '../../Services/produtos.service';
import { Colecao } from 'src/app/model/Colecao';
import { colecaoPutDTO } from 'src/app/DTOS/colecaoPutDTO';
import { ColecoesService } from 'src/app/Services/colecoesService';

@Component({
  selector: 'app-editar-colecao',
  templateUrl: './editar-colecao.component.html',
  styleUrls: ['./editar-colecao.component.css']
})
export class CollectionEditComponent implements OnInit {

  @Input() colection : Colecao;
  product : Produto;
  allProducts: Produto[];

  constructor(private colecoesService: ColecoesService, private produtosService: ProdutosService ) {
  }

  getProducts(): void {
    this.produtosService.getProdutos().subscribe(p =>this.allProducts = p);
  }

  ngOnInit() {  
    this.getProducts();
  }

  editarColecao(col:Colecao,name:string, description:string, produtos:Array<number>){
    if(!name || 
      !description){
      alert("Todos os parametros tem de estar preenchidos");
      return;
    }
    let colecaoId = col.colecaoId;
    let colecaoName = name;
    let colecaoDescription = description;
    let colecaoProductsId = produtos;
    

    this.colecoesService.putColecao(col.colecaoId,
      {colecaoId,colecaoName,colecaoDescription,colecaoProductsId} as colecaoPutDTO).subscribe(c => this.colection = c);

    
    return

  }
}
