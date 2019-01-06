import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Colecao } from 'src/app/model/Colecao';
import { ColecoesService } from 'src/app/Services/colecoesService';
import { ToastrService } from 'ngx-toastr';


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
    let id = parseInt(colection.collectionId);
    this.colecoesService.getColecao(id).subscribe(d=>this.selectedColecao=d);
 
  }

  constructor(
    private location: Location, 
    private colecoesService: ColecoesService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.getColecoes();
  
  }

  getColecao(colection: Colecao){
    let id = parseInt(colection.collectionId);
    this.colecoesService.getColecao(id).subscribe(d=>{this.selectedColecao=d; this.ngOnInit();});
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
    console.log(colecao.collectionId);
    this.colecoesService.delete(colecao.collectionId).subscribe(c =>{this.toastr.success("Apagado"); this.ngOnInit();});
  }

}
