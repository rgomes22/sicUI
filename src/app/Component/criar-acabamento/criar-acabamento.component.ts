import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FinishService } from 'src/app/Services/finish.service';
import { Finish } from 'src/app/model/Finish';
import { criarFinishDTO } from 'src/app/DTOS/criarFinishDTO';

@Component({
  selector: 'app-criar-acabamento',
  templateUrl: './criar-acabamento.component.html',
  styleUrls: ['../../app.component.css']})

export class CriarAcabamentoComponent implements OnInit {

  titulo = 'Criar Acabamento';
  
  
  finish: Finish[]=[];
  
  constructor(
    private location: Location,
    private finishService:FinishService) { }

  ngOnInit() {
  }

  
  goBack(): void {
    this.location.back();
  }


  post(finishName:string):void{
   
    if(!finishName ){
      alert("Parametros em falta");
      return;
    }
    this.finishService.postFinish({finishName} as criarFinishDTO).subscribe(fin=>{this.finish.push(fin)},()=>alert("ACABAMENTO CRIADO COM SUCESSO"));
  }

  
}
