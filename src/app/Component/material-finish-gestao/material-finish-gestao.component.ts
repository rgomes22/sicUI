import { Component, OnInit } from '@angular/core';
import { MateriaisService } from '../../Services/materiais.service';
import { Material } from 'src/app/model/Material';
import { FinishService } from 'src/app/Services/finish.service';
import { MaterialFinishService } from 'src/app/Services/material-finish.service';
import { Finish } from 'src/app/model/Finish';
import { MaterialFinish } from 'src/app/model/MaterialFinish';
import { Price } from 'src/app/model/Price';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';

@Component({
  selector: 'app-material-finish-gestao',
  templateUrl: './material-finish-gestao.component.html',
  styleUrls: ['../../app.component.css']
})
export class MaterialFinishGestaoComponent implements OnInit {

  arrayMateriais : Material[] = [];
  arrayFinish : Finish[] = [];
  arrayCombinations : MaterialFinish[] = [];
  arrayPriceHistory : any[] = [];

  selectedMaterialPrice : number;
  selectedMaterialId : string;
  selectedFinishId : string;
  selectedCombo : MaterialFinish;
  selectedComboCurrentPrice : number;

  dateOfPrice : Date;
  anotherPriceDate : Date;
  settings : any;

  constructor(
    private matService : MateriaisService,
    private finService : FinishService,
    private allService : MaterialFinishService,
    private toastr : ToastrService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getCombination();
    this.getFinish();
    this.getMateriais();
    this.dateOfPrice = new Date();
    this.anotherPriceDate = new Date();
    this.settings = {
      bigBanner : true,
      timePicker : true,
      format: 'dd-MM-yyyy hh:mm a',
      defaultOpen: false,
      closeOnSelect: false
    }
  }

  getMateriais():void{
    this.matService.getMateriais().subscribe(array =>{
      this.arrayMateriais = array;
    });
  }
  goBack(): void {
    this.location.back();
  } 
  
  getFinish(): void{
    this.finService.getAcabamentos().subscribe(array => {
      this.arrayFinish = array;
    });
  }

  //get's all the materials with finishes
  getCombination(): void{
    this.allService.getMaterialFinishes().subscribe(array => {
      this.arrayCombinations = array;
    })
  }

  getMaterialPriceHistory(idM:string, idF:string):void{
    this.allService.getPriceHistory(idM,idF).subscribe(prices =>{
      console.log(prices);
      this.arrayPriceHistory.splice(0,this.arrayPriceHistory.length); // limpa array
      for(var i = 0; i< prices.length; i++){
        var temp = new Date(prices[i].activeDate*1000).toString().split(" ");
        this.arrayPriceHistory.push({
            price : prices[i].price,
            date:temp[1]+" "+temp[2]+" "+temp[3]+" "+temp[4],//shows month day year hour min sec
          });
      }
    });
  }

  getComboCurrentPrice(idM:string, idF:string):void{
    this.allService.getActivePrice(idM,idF).subscribe(price =>{
      this.selectedComboCurrentPrice = price.price;
    });
  }

  onMatSelect(id:string):void{
    this.matService.getMaterialPrice(id).subscribe(price => {
      this.selectedMaterialPrice = price.price;
      this.selectedMaterialId = id;
    });
  }

  onFinSelect(id : string):void{
    this.selectedFinishId = id;
  }

  onComboSelect(c:MaterialFinish):void{
    this.selectedCombo = c;
    this.getMaterialPriceHistory(c.materialId.toString(),c.finishId.toString());
    this.getComboCurrentPrice(c.materialId.toString(),c.finishId.toString());
  }

  alterPrice(newPrice : number):void{

    var timestamp : number;

    if(this.anotherPriceDate instanceof Date){
      timestamp = this.anotherPriceDate.getTime();
    }else{
      timestamp = new Date(this.anotherPriceDate).getTime();
    }

    timestamp = Math.floor( timestamp /1000);

    let price : Price = new Price();
    price.Price = newPrice;
    price.ActiveDate = timestamp;

    this.allService.addPrice(this.selectedCombo.materialId.toString(),this.selectedCombo.finishId.toString(),price).subscribe(price =>{
      this.getMaterialPriceHistory(this.selectedCombo.materialId.toString(),this.selectedCombo.finishId.toString());
      this.getComboCurrentPrice(this.selectedCombo.materialId.toString(),this.selectedCombo.finishId.toString());
      this.toastr.success("Preço Adicionado", "Sucesso");
    });
  }

  criarCombo(precoAdicional : number):void{

    if(!this.selectedMaterialId){
      this.toastr.error("Selecione um Material", "Error");
    }
    if(!this.selectedFinishId){
      this.toastr.error("Selecione um Acabamento", "Error");
    }

    var timestamp : number;
    
    if(this.dateOfPrice instanceof Date){
      timestamp = this.dateOfPrice.getTime();
    }else{
      timestamp = new Date(this.dateOfPrice).getTime();
    }

    timestamp = Math.floor( timestamp /1000);

    let price : Price = new Price();
    price.Price = precoAdicional;
    price.ActiveDate = timestamp;
    
    this.allService.createMaterialFinish(this.selectedFinishId,this.selectedMaterialId).subscribe(mf =>{
      this.allService.addPrice(this.selectedMaterialId,this.selectedFinishId,price).subscribe();
      this.getCombination();
      this.toastr.success("Combinação criada","Sucesso");
    });

    
    
  }
}
