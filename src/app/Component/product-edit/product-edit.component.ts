import { Component, OnInit, Input } from '@angular/core';
import { Produto } from '../../model/Produto';
import { MaterialFinish } from '../../model/MaterialFinish';
import { MaterialFinishService } from '../Services/material-finish.service';
import { CategoryServiceService } from '../Services/category-service.service';
import { Category } from '../../model/Category';
import { ProdutosService } from '../Services/produtos.service';
import { produtoPutDTO } from '../../DTOS/produtoPutDTO';
import { categoryDTO } from '../../DTOS/categoryDTO';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  @Input() product : Produto;
  allMaterialFinishes: MaterialFinish[];
  allCategories: Category[];
  category:Category;
  categoryId : number;

  constructor(private materialFinishService: MaterialFinishService, private categoryService: CategoryServiceService, private productService: ProdutosService) { 
    
  }

  getMfs(): void {
    this.materialFinishService.getMaterialFinishes().subscribe(mfs => this.allMaterialFinishes = mfs);
  }

  getCategories(): void {
    this.categoryService.getCategories().subscribe(cat => this.allCategories = cat);
  }

  getCategory(value : number){
   // this.categoryService.getCategoryById(value).subscribe(cat => this.category = cat);
  }

  ngOnInit() {  
    this.getMfs();
    this.getCategories();
    
  }

  categoryEdit(value : number){
    this.categoryId = value;
  }

  editarProduto(pro:Produto,name:string , description:string){
    if(!name || 
      !description){
      alert("Todos os parametros tem de estar preenchidos");
      return;
    }
    let productId = pro.productId;
    let productName = name;
    let productDescription = description;
    let productCategoryId = this.categoryId;
    
    

    this.productService.putProduct(pro.productId,
      {productId,productName,productDescription,productCategoryId} as produtoPutDTO).subscribe(p => this.product = p);

    
    return

  }
}
