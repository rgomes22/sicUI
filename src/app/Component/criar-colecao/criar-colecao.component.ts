import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { ProdutosService } from 'src/app/Services/produtos.service';
import { Produto } from 'src/app/model/Produto';

@Component({
  selector: 'app-criar-colecao',
  templateUrl: './criar-colecao.component.html',
  styleUrls: ['../../app.component.css']
})

export class CriarColecaoComponent implements OnInit {
    titulo = 'Criar Coleção';
    
  

    constructor( 
        private location: Location,
        private  produtosService: ProdutosService,
        private allProdutos: Produto[]
    ){ }

    ngOnInit() {
        this.getProdutos();
    }

    getProdutos(): void {  
        this.produtosService.getProdutos().subscribe(data =>{
        console.log('Produtos'+data);
        this.allProdutos = data;
        });
    }

    goBack(): void {
        this.location.back();
    }
}