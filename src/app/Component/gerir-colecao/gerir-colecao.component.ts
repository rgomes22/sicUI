import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gerir-colecao',
  templateUrl: './gerir-colecao.component.html',
  styleUrls: ['../../app.component.css']
})
export class GerirColecaoComponent implements OnInit {
  titulo = ' SIC Gestão de Coleções';
  colecoes = 'Editar Coleções';
  criarColecao = 'Criar Nova Coleção';
  constructor() { }

  ngOnInit() {
  }

}