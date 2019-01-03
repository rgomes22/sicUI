import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Category } from '../../model/Category';
import { CategoryServiceService } from '../../Services/category-service.service';

@Component({
  selector: 'app-gerir-category',
  templateUrl: './gerir-categorias.component.html',
  styleUrls: ['../../app.component.css']
})
export class GerirCategoriasComponent implements OnInit {


  selectedCategory : Category;
  titulo='Gestão de Categorias';
  allCategories: Category[];

listagem = 'Categorias Disponiveis';

  constructor( 
    private location: Location,
    private categoryService: CategoryServiceService
  ) { }

  ngOnInit() {
    this.getCategories();
  }

  
  goBack(): void {
    this.location.back();
  } 

  getCategories(): void{
    this.categoryService.getCategories().subscribe(data =>{
      console.log('Categories'+data);
      this.allCategories = data;
    });
  }

  delete(category:Category): void {
    this.allCategories = this.allCategories.filter(h => h !== category);
    this.categoryService.delete(category).subscribe(()=>this.ngOnInit());
  }

  onSelect(category: Category): void {
    this.selectedCategory = category;
  }

}
