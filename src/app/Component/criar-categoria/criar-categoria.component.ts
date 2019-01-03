import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { CategoryServiceService } from '../../Services/category-service.service';
import { Category } from 'src/app/model/Category';
import { criarCategoriaDTO } from 'src/app/DTOS/criarCategoriaDTO';

@Component({
  selector: 'app-criar-categoria',
  templateUrl: './criar-categoria.component.html',
  styleUrls: ['../../app.component.css']
})
export class CriarCategoriaComponent implements OnInit {
  titulo = 'Criar Categorias';
  
  allCategories: Category[];
  parentCategoryID: number;
  
  categorias: Category[]=[];
  
  constructor(
    private location: Location,
    private categoryService:CategoryServiceService) { }

  ngOnInit() {
    
    this.getCategories();
  }

  
  goBack(): void {
    this.location.back();
  }
  getCategories(): void {
    this.categoryService.getCategories().subscribe(data =>{
      console.log('Materiais'+data);
      this.allCategories = data;
    });
  }

  post(categoryName:string):void{
   
    if(!categoryName ||
      !this.parentCategoryID ){
      alert("Parametros em falta");
      return;
    }

    let categoryParentID = this.parentCategoryID;
    this.categoryService.postCategoria({categoryName,categoryParentID} as criarCategoriaDTO).subscribe(prod=>{this.categorias.push(prod)});
  }

  adicionarPai(id: number):void
  {
    this.parentCategoryID=id;
    console.log("Id parent categoria: "+id);
  }

}
