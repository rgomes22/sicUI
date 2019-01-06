import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gerir-catalogo',
  templateUrl: './gerir-catalogo.component.html',
  styleUrls: ['../../app.component.css']
})
export class GerirCatalogoComponent implements OnInit {
  titulo = ' SIC Gestão de Catálogos';
  catalogos = 'Editar Catálogos';
  criarCatalogo = 'Criar Novo Catálogo';
  constructor() { }

  ngOnInit() {
  }

}