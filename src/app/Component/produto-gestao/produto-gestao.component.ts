import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { ProdutosService } from '../../Services/produtos.service';
import { Produto } from '../../model/Produto';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-produto-gestao',
  templateUrl: './produto-gestao.component.html',
  styleUrls: ['../../app.component.css']
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
    private produtosService: ProdutosService,private toastr: ToastrService
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
    this.produtosService.delete(produto).subscribe(()=>this.toastr.success("APAGADO O PRODUTO"),()=>this.getProdutos());
  }

}
