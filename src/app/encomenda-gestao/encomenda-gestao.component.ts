import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Encomenda } from '../model/Encomenda';
import { EncomendaService } from '../encomenda.service';

@Component({
  selector: 'app-encomenda-gestao',
  templateUrl: './encomenda-gestao.component.html',
  styleUrls: ['../app.component.css']
})
export class EncomendaGestaoComponent implements OnInit {
  allEncomendas: Encomenda[];

  constructor(
    private location : Location,
    private encomendaService : EncomendaService
  ) { }

  ngOnInit() {
    this.getEncomendas();
  }

  private getEncomendas(): void {
    this.encomendaService.getEncomendas().subscribe(data =>{ 
        console.log(data);
        this.allEncomendas = data;
     });

  }

  deleteEncomenda(encomenda: Encomenda): void {
    this.allEncomendas = this.allEncomendas.filter(h => h !== encomenda);
    this.encomendaService.deleteEncomenda(encomenda).subscribe();
  }

  createEncomenda(nome: string, pais: string, cidade: string, rua: string):void {
    
    if(!nome || !pais || !cidade || !rua){
      alert('MISSING PARAMETERS')
      return;}
    this.encomendaService.createEncomenda({nome,pais,cidade,rua} as Encomenda).subscribe(enc => {this.allEncomendas.push(enc)});
  }
  
  goBack(): void {
    this.location.back();
  }

}
