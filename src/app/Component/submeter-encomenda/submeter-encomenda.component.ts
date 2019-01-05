import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {EncomendaService} from '../../Services/encomenda.service'
import { Encomenda } from 'src/app/model/Encomenda';

@Component({
  selector: 'app-submeter-encomenda',
  templateUrl: './submeter-encomenda.component.html',
  styleUrls: ['../../app.component.css']
})
export class SubmeterEncomendaComponent implements OnInit {

  encomendaSelecionada : string;
  allEncomendas: Encomenda[];
  constructor(private location:Location,
              private encomendaService: EncomendaService) { }

  ngOnInit() {
    this.getEncomendas();
  }

  goBack(): void {
    this.location.back();
  }

  private getEncomendas(): void {
    this.encomendaService.getEncomendas().subscribe(data =>{ 
        console.log(data);
        this.allEncomendas = data;
     });
  }


  selectOrder(value: string): void {
    this.encomendaSelecionada = value;
    console.log(value);
    // alert(value);
  }

  submitEncomenda():void {
  
    let encomenda = this.encomendaSelecionada;
   this.encomendaService.encomenda_submit(encomenda).subscribe(enc => {this.allEncomendas.push(enc); alert("Submetida com sucesso")});
  }

  
}