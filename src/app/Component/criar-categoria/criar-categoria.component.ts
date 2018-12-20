import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { CategoryServiceService } from '../../Services/category-service.service';
import { Category } from 'src/app/model/Category';

@Component({
  selector: 'app-criar-categoria',
  templateUrl: './criar-categoria.component.html',
  styleUrls: ['../../app.component.css']
})
export class CriarCategoriaComponent implements OnInit {
  titulo = 'Criar Categorias';
  
  allCategories: Category[];
  
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

}
