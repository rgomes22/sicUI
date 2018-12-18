import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { RestricoesService } from '../restricoes.service';
import { Restricao } from '../model/Restricao';

@Component({
  selector: 'app-restricao-gestao',
  templateUrl: './restricao-gestao.component.html',
  styleUrls: ['../app.component.css']
})
export class RestricaoGestaoComponent implements OnInit {


  allRestricoes: Restricao[];
  titulo = 'Gestão de Restriçoes';
  listagem = 'Lista Restriçoes Existentes';
  restricaoSelecionada :Restricao;


  constructor(
    private location: Location,
    private restricaoService : RestricoesService
  ) { }

  ngOnInit() {
    this.getRestricoes();
  }

  goBack(): void {
    this.location.back();
  }

  //Getget
  getRestricoes(): void {
    this.restricaoService.getRestriçoes().subscribe(data =>{
      console.log('Restricoes'+data);
      this.allRestricoes= data;
    });
  }


  //Post


  //Delete
  delete(restricao: Restricao): void {
    this.allRestricoes = this.allRestricoes.filter(h => h !== restricao);
    this.restricaoService.delete(restricao).subscribe();
  }
}
