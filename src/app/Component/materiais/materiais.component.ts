import { Component, OnInit } from '@angular/core';
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
  titulo = 'Gestão de Materias';
  allMateriais: Material[];
  listagem = 'Materiais Disponiveis';
  dateOfPrice : Date;
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
    this.settings = {
      bigBanner : true,
      timePicker : true,
      format: 'dd-MM-yyyy hh:mm a',
      defaultOpen: false,
      closeOnSelect: false
    }
  }

  goBack(): void {
    this.location.back();
  } 

  getMateriais(): void {
    this.materiaisService.getMateriais().subscribe(data =>{
      console.log('Materiais'+data);
      this.allMateriais = data;
    });
  }

  createMaterial(materialName: string, preco : number):void{
    if(!materialName || !preco){
      this.toastr.error("Arguments Missing");
      return;
    }
    const timestamp = this.dateOfPrice.getTime();
    console.log(timestamp," time ");

    this.priceOfMaterial = new Price();
    this.priceOfMaterial.Price = preco;
    this.priceOfMaterial.activeDate = timestamp;

    //this.materiaisService.createMaterial({materialName} as Material).subscribe(mat => {this.getMateriais(); console.log(mat)});
  }

  delete(mat : Material) : void{
    this.allMateriais = this.allMateriais.filter(h => h !== mat);
    this.materiaisService.deleteMaterial(mat).subscribe();
  }

  onSelect(material: Material): void {
    this.selectedMaterial = material;
  }
  
  editMaterial(name : string){
    this.selectedMaterial.materialName = name;
    this.materiaisService.editMaterial(this.selectedMaterial).subscribe(mat => this.getMateriais());
  }
  


}
