import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { ProdutosService } from '../produtos.service';
import { Produto } from '../model/Produto';


@Component({
  selector: 'app-produto-gestao',
  templateUrl: './produto-gestao.component.html',
  styleUrls: ['../app.component.css']
})
export class ProdutoGestaoComponent implements OnInit {
  
  selectedProduct : Produto;
  titulo = 'Gestão de Produtos';
  listagem = 'Lista Produtos';
  allProdutos: Produto[];

  onSelect(product: Produto): void {
    this.selectedProduct = product;
  }

  constructor(
    private location: Location, 
    private produtosService: ProdutosService
  ) { }

  ngOnInit() {
    this.getProdutos();
  
  }

  goBack(): void {
  this.location.back();
}

  getProdutos(): void {
    
    this.produtosService.getProdutos().subscribe(data =>{
      console.log('Produtos'+data);
      this.allProdutos = data;
    });
  }

  //delete do produto
  delete(produto: Produto): void {
    this.allProdutos = this.allProdutos.filter(h => h !== produto);
    this.produtosService.delete(produto).subscribe();
  }

}
