import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['../../app.component.css']
})
export class CatalogoComponent implements OnInit {
  titulo = ' SIC Gestão de Catalogo';
  produtos = 'Gerir Produtos';
  materiais = 'Gerir Materiais';
  criarProdutos = 'Criar Novo Produto';
  restricoes = 'Gerir Restricoes';
  dimensoes = 'Gerir Dimensoes';
  criarCategorias = 'Criar Categoria';
  gerirCategorias = 'Gerir Categoria';
  gerirAcabamentos = 'Gerir Acabamentos'; 
  criarAcabamentos = 'Criar Acabamentos'; 
  constructor() { }

  ngOnInit() {
  }

}
