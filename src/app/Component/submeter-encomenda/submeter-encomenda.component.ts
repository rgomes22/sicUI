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

  allEncomendas: Encomenda[];
  encomendaGet : Encomenda= new Encomenda;
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

  getEncomenda(value: string): void {    
    this.encomendaService.getEncomenda(value)
    .subscribe(encomenda => {this.encomendaGet = encomenda;});

    // alert(value);
  }
  submitEncomenda():void {
    if(this.encomendaGet.estado=='criada')
    {
      if(this.encomendaGet.itens !== undefined && this.encomendaGet.itens.length > 0)
      {
        let encomenda = this.encomendaGet;
        this.encomendaService.encomenda_submit(encomenda.id).subscribe(enc => {this.allEncomendas.push(enc); alert("Submetida com sucesso"); this.ngOnInit();});
      }
      else{
        alert('Não tem itens associados');
      }
    }
    else{
      alert('Estado da encomenda selecionada:' + this.encomendaGet.estado);
    }
  }

  
}