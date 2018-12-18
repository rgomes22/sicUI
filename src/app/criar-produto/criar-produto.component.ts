import { Component, OnInit , Input} from '@angular/core';
import { Location } from '@angular/common';

import { ProdutosService } from '../produtos.service';
import { Produto } from '../model/Produto';
import { Category } from '../model/Category';
//import { Material } from '../model/Material';
import { MaterialFinish } from '../model/MaterialFinish';
import { MaterialFinishService } from '../material-finish.service';
import { CategoryServiceService } from '../category-service.service';

@Component({
  selector: 'app-criar-produto',
  templateUrl: './criar-produto.component.html',
  styleUrls: ['../app.component.css']
})
export class CriarProdutoComponent implements OnInit {
  titulo = 'Criar Produtos';
  produtos: Produto[];
  materiais: number[]=[];
  allMateriaisFinish: MaterialFinish[];
  allCategories: Category[];
  productCategoryId: number;


  constructor( 
    private location: Location,
    private produtoService: ProdutosService,
    private materialFinishService: MaterialFinishService,
    private categoryService:CategoryServiceService
  ) { }

  ngOnInit() {
    this.getMateriais();
    this.getCategories();
  }

  goBack(): void {
    this.location.back();
  }

  //delete do produto
  delete(produto: Produto): void {
    this.produtos = this.produtos.filter(h => h !== produto);
    this.produtoService.delete(produto).subscribe();
  }

  //post do produto para criar um novo
  post():void{

  }

  getMateriais(): void {
    this.materialFinishService.getMaterialFinishes().subscribe(data =>{
      console.log('Materiais'+data);
      this.allMateriaisFinish = data;
    });
  }
  getCategories(): void {
    this.categoryService.getCategories().subscribe(data =>{
      console.log('Materiais'+data);
      this.allCategories = data;
    });
  }

  adicionarMaterial(id:number):void{
    if (this.materiais.some(e => e === id)) {
      /* vendors contains the element we're looking for */
      console.log("Ja foi adicionado o id: "+id);
    }else{
      this.materiais.push(id);
      console.log("Adicionou id: "+id);
    }
   
   
  }

  addCategory(id:number):void{
    this.productCategoryId=id;
    console.log("Id categoria: "+id);
  }

  addDimensions():void{
    
  }
}
