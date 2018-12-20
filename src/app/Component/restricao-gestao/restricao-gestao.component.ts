import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { RestricoesService } from '../../Services/restricoes.service';
import { ProdutosService} from '../../Services/produtos.service';

import { Restricao } from '../../model/Restricao';
import { Produto } from '../../model/Produto';

import { RestricaoDTO } from '../../DTOS/restricaoDTO';

@Component({
  selector: 'app-restricao-gestao',
  templateUrl: './restricao-gestao.component.html',
  styleUrls: ['../../app.component.css']
})
export class RestricaoGestaoComponent implements OnInit {

  allProdutos:Produto[];
  opcoes : boolean []=[true,false];
  opcaoSelecionadaMandatoria:boolean;
  opcaoSelecionadaMaterial:boolean;
  allRestricoes: Restricao[];
  titulo = 'Gestão de Restriçoes';
  listagem = 'Lista Restriçoes Existentes';
  criar = 'Adicionar Agregaçao';
  restricaoSelecionada :Restricao;
  //novaRestricao:Restricao;


  //parametros restricao
  //restricaoId: string ;
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
    private location: Location,
    private restricaoService : RestricoesService,
    private produtosService : ProdutosService
  ) { }

  ngOnInit() {
    this.getRestricoes();
    this.getProdutos();
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

  //Getget produtos
  getProdutos(): void {
    this.produtosService.getProdutos().subscribe(data =>{
      console.log('Produtos'+data);
      this.allProdutos= data;
    });
  }

  //Post
  postRestricao( restrictionDescription:string, restrictionMaxOccupationHeight:number,restrictionMaxOccupationDepth:number,restrictionMaxOccupationWidth:number,restrictionMinOccupationHeigth:number,restrictionMinOccupationDepth:number, restrictionMinOccupationWidth:number){

    if (/*!Descricao|| !this.produtoSelecionado || !this.parteSelecionada || */this.produtoSelecionado==this.parteSelecionada  /*|| !Hmax || !Dmax || !Wmax || !Hmin || !Dmin || !Wmin*/) {
      alert("TEM DE DEFINIR CORRETAMENTE PARAMETROS DE EDIÇAO");
      return;
      
    }else{
      this.restricaoDescricao=restrictionDescription;
      let productParentId=this.produtoSelecionado;
      let productPartId=this.parteSelecionada;
      let restrictionMandatory=this.opcaoSelecionadaMandatoria;
      let restrictionMaterial =this.opcaoSelecionadaMaterial;
      this.restricaoHmax=restrictionMaxOccupationHeight;
      this.restricaoDmax=restrictionMaxOccupationDepth
      this.restricaoWmax=restrictionMaxOccupationWidth;
      this.restricaoHmin=restrictionMinOccupationHeigth;
      this.restricaoDmin=restrictionMinOccupationDepth;
      this.restricaoWmin= restrictionMinOccupationWidth;

      this.restricaoService.createRestricao({restrictionDescription,productParentId,productPartId, restrictionMandatory,restrictionMaterial,restrictionMaxOccupationHeight,restrictionMaxOccupationDepth,restrictionMaxOccupationWidth,restrictionMinOccupationHeigth,restrictionMinOccupationDepth, restrictionMinOccupationWidth} as Restricao).subscribe(res=>{this.allRestricoes.push(res)});
  }

  }

  //Put para editar ?


  //Delete
  delete(restricao: Restricao): void {
    this.allRestricoes = this.allRestricoes.filter(h => h !== restricao);
    this.restricaoService.delete(restricao).subscribe();
  }


  prodOpEdit(value: number): void {
    this.produtoSelecionado = value;
    console.log(value);
    // alert(value);
  }

  partOpEdit(value: number): void {
    this.parteSelecionada = value;
    console.log(value);
    // alert(value);
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

  onSelect(restricao:Restricao){
    this.restricaoSelecionada=restricao;
  }
}
