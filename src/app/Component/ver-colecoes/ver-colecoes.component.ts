import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Colecao } from 'src/app/model/Colecao';
import { ColecoesService } from 'src/app/Services/colecoesService';


@Component({
  selector: 'app-ver-colecoes',
  templateUrl: './ver-colecoes.component.html',
  styleUrls: ['../../app.component.css']
})
export class VerColecoesComponent implements OnInit {
  titulo = 'Ver Coleções';
  selectedColecao : Colecao;
  listagem = 'Lista de Coleções';
  allColecoes: Colecao[];

  onSelect(colection: Colecao): void {
    let id = parseInt(colection.collectionId);
    this.colecoesService.getColecao(id).subscribe(d=>this.selectedColecao=d);
 
  }

  constructor(
    private location: Location, 
    private colecoesService: ColecoesService
  ) { }

  ngOnInit() {
    this.getColecoes();
  
  }

  getColecao(colection: Colecao){
    let id = parseInt(colection.collectionId);
    this.colecoesService.getColecao(id).subscribe(d=>this.selectedColecao=d);
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

}
