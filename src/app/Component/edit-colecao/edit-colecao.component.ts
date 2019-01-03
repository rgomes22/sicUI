import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Colecao } from 'src/app/model/Colecao';
import { ColecoesService } from 'src/app/Services/colecoesService';


@Component({
  selector: 'app-edit-colecao',
  templateUrl: './edit-colecao.component.html',
  styleUrls: ['../../app.component.css']
})
export class EditColecaoComponent implements OnInit {
  titulo = 'Editar Coleções';
  selectedColecao : Colecao;
  listagem = 'Lista de Coleções';
  allColecoes: Colecao[];

  onSelect(colection: Colecao): void {
    this.selectedColecao = colection;
  }

  constructor(
    private location: Location, 
    private colecoesService: ColecoesService
  ) { }

  ngOnInit() {
    this.getColecoes();
  
  }

  goBack(): void {
  this.location.back();
}

  getColecoes(): void {
    
    this.colecoesService.getColecoes().subscribe(data =>{
      console.log('Colecões'+data);
      this.allColecoes = data;
    });
  }

  //delete da coleção
  delete(colecao: Colecao): void {
    this.allColecoes = this.allColecoes.filter(h => h !== colecao);
    this.colecoesService.delete(colecao).subscribe();
  }

}
