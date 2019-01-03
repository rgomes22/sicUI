import { Component, OnInit , Input} from '@angular/core';

import { Restricao } from '../../model/Restricao';
import { RestricoesService } from '../../Services/restricoes.service';
import { Produto } from '../../model/Produto';
import { restricaoPutDTO } from '../../DTOS/restricaoPutDTO'

@Component({
  selector: 'app-restricao-edit',
  templateUrl: './restricao-edit.component.html',
  styleUrls: ['../../app.component.css']
})
export class RestricaoEditComponent implements OnInit {

  @Input() restricao:Restricao;
  restricaoPutDTO : restricaoPutDTO;
  opcoes : boolean []=[true,false];
  opcaoSelecionadaMandatoria:boolean;
  opcaoSelecionadaMaterial:boolean;
  pai: Produto;
  filho: Produto;
  edit='Editar';

  restricaoDescricao: string ='';
  produtoSelecionado:number;
  parteSelecionada:number;
  restricaoMandatory: boolean = false;
  restricaoSame: boolean =false;
  restricaoHmax: number=1;
  restricaoDmax: number=1;
  restricaoWmax: number=1;
  restricaoHmin: number=0;
  restricaoDmin: number=0; 
  restricaoWmin: number=0;

  constructor(
    private restricaService: RestricoesService
  ) { }

  ngOnInit() {
    this.getProdutos();
  }

  getProdutos():void{
   // alert("oi");
  }

  obOpEdit(value: boolean): void {
    this.opcaoSelecionadaMandatoria = value;
    console.log(value);
    // alert(value);
  }
  sameOpEdit(value: boolean): void {
    this.opcaoSelecionadaMaterial = value;
    console.log(value);
    // alert(value);
  }

  put(restrictionMaxOccupationHeight1:number,restrictionMaxOccupationDepth1:number,restrictionMaxOccupationWidth1:number,restrictionMinOccupationHeigth1:number,restrictionMinOccupationDepth1:number, restrictionMinOccupationWidth1:number){
    //console.log(restrictionMaxOccupationDepth);
    //let productParentId=this.restricao.productParentId;
    //let productPartId=this.restricao.productPartId;
    if( !restrictionMaxOccupationHeight1 && !restrictionMaxOccupationDepth1 && !restrictionMaxOccupationWidth1 && !restrictionMinOccupationHeigth1 && !restrictionMinOccupationDepth1 && !restrictionMinOccupationWidth1){
      if(!this.opcaoSelecionadaMandatoria && !this.opcaoSelecionadaMaterial){
      alert("TEM DE PREENCHER PELO MENOS UM PARAMETRO");
      return;}
    }

    if(restrictionMaxOccupationDepth1>1 || restrictionMaxOccupationHeight1>1 || restrictionMaxOccupationWidth1>1 || restrictionMinOccupationDepth1>=1 || restrictionMinOccupationHeigth1>=1 || restrictionMinOccupationWidth1>=1){
      alert("A PERCENTAGEM DE OUCUPACAO DEVE ESTAR COMPREENDIDA ENTRE 0(0%) e 1(100%)");
      return;
    }
    

    console.log("put");
   
    //this.restricaoPutDTO.restrictionDescription=this.restricao.restrictionDescription;
    let restrictionMandatory = false
    if(this.opcaoSelecionadaMaterial){
      restrictionMandatory=this.opcaoSelecionadaMaterial;
      
    }else{restrictionMandatory=this.restricao.restrictionMandatory;}
    console.log(restrictionMandatory+" M");

    let restrictionMaterial = false;//
    if(this.opcaoSelecionadaMandatoria){
      restrictionMaterial=this.opcaoSelecionadaMandatoria;
      
    }else{restrictionMaterial=this.restricao.restrictionMaterial;}
    console.log(restrictionMaterial+ " M1");
  
    let restrictionMaxOccupationDepth = this.restricao.restrictionMaxOccupationDepth;//
    if(restrictionMaxOccupationDepth1){
      restrictionMaxOccupationDepth=restrictionMaxOccupationDepth1;
    }      
    console.log(restrictionMaxOccupationDepth);
    
    let restrictionMaxOccupationHeight = this.restricao.restrictionMaxOccupationHeight;//
    if(restrictionMaxOccupationHeight1){
      restrictionMaxOccupationHeight=restrictionMaxOccupationHeight1;
      
    }
    console.log(restrictionMaxOccupationHeight);

    let restrictionMaxOccupationWidth=this.restricao.restrictionMaxOccupationWidth;//
    if(restrictionMaxOccupationWidth1){
      restrictionMaxOccupationWidth=restrictionMaxOccupationWidth1;
    }
    console.log(restrictionMaxOccupationWidth);
    
    let restrictionMinOccupationDepth = this.restricao.restrictionMinOccupationDepth;//
    if(restrictionMinOccupationDepth1){
      restrictionMinOccupationDepth=restrictionMinOccupationDepth1;
      
    }
   console.log(restrictionMinOccupationDepth);

    let restrictionMinOccupationHeight=this.restricao.restrictionMinOccupationHeigth;//
    if(restrictionMinOccupationHeigth1){
      restrictionMinOccupationHeight=restrictionMinOccupationHeigth1;
      
    }//else{this.restricaoPutDTO.restrictionMinOccupationHeight=this.restricao.restrictionMinOccupationHeigth;}
   console.log(restrictionMinOccupationHeight);
    

   let restrictionMinOccupationWidth=this.restricao.restrictionMinOccupationWidth;//
    if(restrictionMinOccupationWidth1){
      restrictionMinOccupationWidth=restrictionMinOccupationWidth1;
      
    }//else{this.restricaoPutDTO.restrictionMinOccupationWidth=this.restricao.restrictionMinOccupationWidth;}
    console.log(restrictionMinOccupationWidth);
    
    let restrictionId = parseInt(this.restricao.restrictionId);
    let restrictionDescription = this.restricao.restrictionDescription;
    let productParentId = this.restricao.productParentId;
    let productPartId = this.restricao.productPartId;
    
    console.log(restrictionId);
    console.log(restrictionDescription);
    console.log(productParentId);
    console.log(productPartId);
    console.log("OK");
    this.restricaService.putRestricao(restrictionId,{restrictionId,restrictionDescription,productParentId,productPartId,restrictionMinOccupationWidth,restrictionMinOccupationHeight,restrictionMinOccupationDepth,restrictionMaxOccupationWidth,restrictionMaxOccupationHeight,restrictionMaxOccupationDepth,restrictionMaterial,restrictionMandatory}as restricaoPutDTO).subscribe(res => this.restricao=res);
  }

}
