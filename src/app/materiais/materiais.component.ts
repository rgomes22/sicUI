import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Material } from '../model/Material';
import { MateriaisService } from '../materiais.service';

@Component({
  selector: 'app-materiais',
  templateUrl: './materiais.component.html',
  styleUrls: ['../app.component.css']
})
export class MateriaisComponent implements OnInit {

  selectedMaterial : Material;
  titulo = 'Gestão de Materias';
  allMateriais: Material[];
  listagem = 'Materiais Disponiveis';
  constructor( 
    private location: Location,
    private materiaisService: MateriaisService
  ) { }

  ngOnInit() {
    this.getMateriais();
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

  createMaterial(materialName: string):void{
    if(!materialName){
      alert('FALTA O NOME ')
      return;
    }
    this.materiaisService.createMaterial({materialName} as Material).subscribe(mat => this.getMateriais());
    
  }

  delete(mat : Material) : void{
    this.allMateriais = this.allMateriais.filter(h => h !== mat);
    this.materiaisService.deleteMaterial(mat).subscribe();
  }

  onSelect(material: Material): void {
    this.selectedMaterial = material;
  }
  /*
  editMaterial(name : string){
    this.selectedMaterial.materialName = name;
    this.materiaisService.edit(this.selectedMaterial).subscribe();
  }
  */

}
