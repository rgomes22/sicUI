import { Component, OnInit, Input } from '@angular/core';
import { Category } from 'src/app/model/Category';
import { CategoryServiceService } from 'src/app/Services/category-service.service';
import { categoryPutDTO } from 'src/app/DTOS/categoryPutDTO';

@Component({
  selector: 'app-editar-categoria',
  templateUrl: './editar-categoria.component.html',
  styleUrls: ['./editar-categoria.component.css']
})
export class EditarCategoriaComponent implements OnInit {
 
  @Input() category : Category;
  allCategories: Category[];
  parentCategoryID :number;
  constructor(private categoryService: CategoryServiceService) { }

  ngOnInit() {
    this.getCategories();
  }
  
  editarCategory(cat:Category, name:string){
    if(!name || 
      !this.parentCategoryID){
      alert("Todos os parametros tem de estar preenchidos");
      return;
    }
    if(this.parentCategoryID == cat.categoryId){
      alert("O Pai desta categoria nao pode ser a mesma");
      return;
    }
    let categoryId = cat.categoryId;
    let categoryName = name;
    let categoryParentId = this.parentCategoryID;
    this.categoryService.putCategoria(cat.categoryId,
      {categoryId,categoryName,categoryParentId} as categoryPutDTO).subscribe(c => this.category = c,()=>alert("Editada com sucesso"),()=>this.ngOnInit());
    return
  }

  getCategories(): void{
    this.categoryService.getCategories().subscribe(data =>{
      console.log('Categories'+data);
      this.allCategories = data;
    });
  }

  addParentCategory(id: number):void
  {
    this.parentCategoryID=id;
    console.log("Id parent categoria: "+id);
  }

}
