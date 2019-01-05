import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Encomenda } from '../../model/Encomenda';
import { EncomendaService } from '../../Services/encomenda.service';

@Component({
  selector: 'app-encomenda-gestao',
  templateUrl: './encomenda-gestao.component.html',
  styleUrls: ['../../app.component.css']
})
export class EncomendaGestaoComponent implements OnInit {
  allEncomendas: Encomenda[];
  cidades = ["brussels",
  "tirana",
  "andorra",
  "vienna",
  "minsk",
  "sarajevo",
  "sofia",
  "prague",
  "nicosia",
  "copenhagen",
  "tallinn",
  "helsinki",
  "paris",
  "marseille",
  "tbilisi",
  "berlin",
  "athens",
  "budapest",
  "reykjavik",
  "dublin",
  "pristina",
  "riga",
  "vaduz",
  "vilnius",
  "luxembourg",
  "skopje",
  "valletta",
  "chisinau",
  "monaco",
  "podgorica",
  "amsterdam",
  "belfast",
  "oslo",
  "warsaw",
  "lisbon",
  "bucharest",
  "moscow",
  "san_marino",
  "edinburgh",
  "belgrade",
  "bratislava",
  "ljubljana",
  "madrid",
  "stockholm",
  "bern",
  "kiev",
  "cardiff"];
cidadeSelecionada : string;
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
    this.encomendaService.deleteEncomenda(encomenda).subscribe(enc => alert("Apagado com sucesso"));
  }

  createEncomenda(nome: string, pais: string, rua: string):void {
    
    if(!nome || !pais || !rua){
      alert('MISSING PARAMETERS')
      return;}
      let cidade = this.cidadeSelecionada;
    this.encomendaService.createEncomenda({nome,pais,cidade,rua} as Encomenda).subscribe(enc => {this.allEncomendas.push(enc); alert("Criado com sucesso")});
  }
  
  goBack(): void {
    this.location.back();
  }

  
  selectCity(value: string): void {
    this.cidadeSelecionada = value;
    console.log(value);
    // alert(value);
  }


}
