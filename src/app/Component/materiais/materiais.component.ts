import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';

import { Material } from '../../model/Material';
import { MateriaisService } from '../../Services/materiais.service';
import { Price } from '../../model/Price';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-materiais',
  templateUrl: './materiais.component.html',
  styleUrls: ['../../app.component.css']

})
export class MateriaisComponent implements OnInit {

  selectedMaterial : Material;
  selectedMaterialPrice : number;
  priceHistoryArray = [];
  titulo = 'Gestão de Materias';
  allMateriais: Material[];
  listagem = 'Materiais Disponiveis';

  dateOfPrice : Date;
  newPriceDate : Date;
  priceOfMaterial : Price 
  settings : any;
  constructor( 
    private location: Location,
    private materiaisService: MateriaisService,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
    this.getMateriais();
    this.dateOfPrice = new Date();
    this.priceOfMaterial = new Price();
    this.settings = {
      bigBanner : true,
      timePicker : true,
      format: 'dd-MM-yyyy hh:mm a',
      defaultOpen: false,
      closeOnSelect: true
    }
  }

  goBack(): void {
    this.location.back();
  } 

  getMateriais(): void {
    this.materiaisService.getMateriais().subscribe(data =>{
      this.allMateriais = data;
    });
  }

  createMaterial(materialName: string, preco : number):void{
    if(!materialName || !preco){
      this.toastr.error("Arguments Missing", "Error");
      return;
    }
    var timestamp : number;
    
    if(this.dateOfPrice instanceof Date){
      timestamp = this.dateOfPrice.getTime();
    }else{
      timestamp = new Date(this.dateOfPrice).getTime();
    }

    timestamp = Math.floor( timestamp /1000);

    this.priceOfMaterial = new Price();
    this.priceOfMaterial.Price = preco;
    this.priceOfMaterial.ActiveDate = timestamp;

    this.materiaisService.createMaterial({materialName} as Material).subscribe(mat => {
      this.materiaisService.addPriceMaterial(mat.materialId,this.priceOfMaterial).subscribe(price =>{});
      this.getMateriais(); 
      this.toastr.success("Material Added with success","Success");
    });
    

  }

  delete(mat : Material) : void{
    this.allMateriais = this.allMateriais.filter(h => h !== mat);
    this.materiaisService.deleteMaterial(mat).subscribe(h =>{this.toastr.success("Deleted with Success", "Success")});
    
  }

  onSelect(material: Material): void {
    this.selectedMaterial = material;
    this.getMaterialPrice(this.selectedMaterial.materialId);
    this.getMaterialPriceHistory(this.selectedMaterial.materialId);
    this.toastr.info("Material "+this.selectedMaterial.materialName+" selected","Info");
  }

  getMaterialPriceHistory(id:string):void{
    this.materiaisService.getMaterialPriceHistory(id).subscribe(prices =>{
      this.priceHistoryArray.splice(0,this.priceHistoryArray.length);
      for(var i = 0; i < prices.length; i++){
        var temp = new Date(prices[i].activeDate*1000).toString().split(" ");
        this.priceHistoryArray.push({
          price: prices[i].price,
          date: temp[1]+" "+temp[2]+" "+temp[3]+" "+temp[4],//shows month day year hour min sec
        })
      }
    });
  }

  getMaterialPrice(id:string):void{
    this.materiaisService.getMaterialPrice(id).subscribe(price =>{ 
      this.selectedMaterialPrice = price.price;
    });
  }
  
  editMaterial(name : string){
    this.selectedMaterial.materialName = name;
    this.materiaisService.editMaterial(this.selectedMaterial).subscribe(mat => this.getMateriais());
  }
  
  alterPrice(preco: number): void{
    if(!preco){
     this.toastr.error("Specify a price","Error");
     return;
    }

    var timestamp : number;
    
    if(this.newPriceDate instanceof Date){
      timestamp = this.newPriceDate.getTime();
    }else{
      timestamp = new Date(this.newPriceDate).getTime();
    }

    timestamp = Math.floor( timestamp /1000);

    this.priceOfMaterial.Price = preco;
    this.priceOfMaterial.ActiveDate = timestamp;

    this.materiaisService.addPriceMaterial(this.selectedMaterial.materialId,this.priceOfMaterial).subscribe(price =>{ 
      this.getMaterialPrice(this.selectedMaterial.materialId);
    });

    this.toastr.success("Price altered with success","Success");
  }

}
