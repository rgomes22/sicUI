import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Item } from '../../model/Item';
import { ItemService } from '../../Services/item.service';
import { MaterialFinishService } from '../../Services/material-finish.service';
import { criarItemFilhoDTO } from '../../DTOS/criarItemFilhoDTO';
import { ThrowStmt } from '@angular/compiler';
import { MaterialFinish } from '../../model/MaterialFinish';
import { Produto } from '../../model/Produto';
import { ProdutosService } from '../../Services/produtos.service';

@Component({
  selector: 'app-item-gestao',
  templateUrl: './item-gestao.component.html',
  styleUrls: ['../../app.component.css']
})
export class ItemGestaoComponent implements OnInit {
  allItens : Item[];
  allMaterialFinishes : MaterialFinish[];
  allProdutos : Produto[];
  ProductId: number;
  MaterialId: number;
  FinishId: number;



  constructor(private location : Location,
    private itemService : ItemService
    ,private materialFinishService: MaterialFinishService,
    private ProdutosService: ProdutosService) { }
    

  ngOnInit() {
    this.getItens();
    this.getMfs();
    this.getProdutos();
   // this.location.go(this.location.path());
  }

  getProdutos(): void{
    this.ProdutosService.getProdutos().subscribe(p => this.allProdutos = p);
  }

  getMfs(): void {
    this.materialFinishService.getMaterialFinishes().subscribe(mfs => this.allMaterialFinishes = mfs);
  }

  getItens(): void{
   
    this.itemService.getItens().subscribe(itens => this.allItens = itens);
    
    //this.allItens = its.filter(h => h.child !== true);
  }

  delete(item: Item): void {
    this.allItens = this.allItens.filter(h => h !== item);
    this.itemService.deleteItem(item).subscribe(()=>this.ngOnInit());
    //this.location.go(this.location.path());
  }

  createPai(Nome: string,Height: number,Depth: number,Width: number): void{
    if(  !Height || !Width || !Depth || !Nome){
      alert("MISSING PARAMETER");
      return;
    }
    if(!this.MaterialId || !this.FinishId ||!this.ProductId ){
      alert("missing prd");
    }
    //alert(ProductId + MaterialId);
    let MaterialId = this.MaterialId;
    let FinishId = this.FinishId;
    let ProductId =  this.ProductId;
    this.itemService.createParent({Nome,ProductId,MaterialId,FinishId,Height,Depth,Width} as criarItemFilhoDTO).subscribe(it => {this.allItens.push(it);this.ngOnInit();});
    //this.location.go(this.location.path());
  }

  goBack(): void {
    this.location.back();
  }

  productOp(value: number):void{
    this.ProductId = value;
    console.log(value);
   // alert(value);
  }
  materialOp(value: number):void{
    this.MaterialId = value;
    console.log(value);
   // alert(value);
  }
  finishOp(value: number):void{
    this.FinishId = value;
    console.log(value);
   // alert(value);
  }

}
