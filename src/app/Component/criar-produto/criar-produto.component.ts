import { Component, OnInit , Input} from '@angular/core';
import { Location } from '@angular/common';

import { ProdutosService } from '../../Services/produtos.service';
import { Produto } from '../../model/Produto';
import { criarProdutoDTO } from '../../DTOS/criarProdutoDTO';
import { Category } from '../../model/Category';
import { MaterialFinish } from '../../model/MaterialFinish';
import { MaterialFinishService } from '../../Services/material-finish.service';
import { CategoryServiceService } from '../../Services/category-service.service';
import { Material } from 'src/app/model/Material';
import { MateriaisService} from '../../Services/materiais.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-criar-produto',
  templateUrl: './criar-produto.component.html',
  styleUrls: ['../../app.component.css']
})
export class CriarProdutoComponent implements OnInit {

  titulo = 'Criar Produtos';
  materiais: Material[]=[];
  allCategories: Category[];
  productMaterialWithFinish: MaterialFinish[]= [];
  dimensions: Array<Array<number>> = [];
  category: number;


  //dropdown variables
    disable = false;
    ShowFilter = false;
    limiteSelection = false;
    selectedMaterials: Material[] = [];
    dropdownSettings : any = {};
    dropdownList = [];
    
    

  constructor( 
    private location: Location,
    private produtoService: ProdutosService,
    private categoryService:CategoryServiceService,
    private materialService: MateriaisService,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
    this.getMateriais();
    this.getCategories();
    this.selectedMaterials = [];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'materialId',
      textField: 'materialName',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
    this.dimensions = [];
    this.category = undefined;
  }

  goBack(): void {
    this.location.back();
  }



  //post do produto para criar um novo
  post(productName:string,productDescription:string):void{
   
    if(!productName || !productDescription || this.dimensions.length == 0 || this.category == undefined || this.selectedMaterials.length == 0) {
      this.toastr.error("All spaces must contain elements", "Error"); 
      return;
    }
    let mat: number[] = [];
    for(let m of this.selectedMaterials ){
      mat.push(parseInt(m.materialId));
    }

    let p : criarProdutoDTO = {
      productName:productName,
      productDescription: productDescription,
      productCategory: this.category,
      productMaterialWithFinish: mat,
      dimensions : this.dimensions
    };
    
    this.produtoService.postProduto(p).subscribe(prod=>this.toastr.success("Product Added", "Success"));
    
  }

  getMateriais(): void {
    this.materialService.getMateriais().subscribe(data => {this.materiais = data});
  }

  getCategories(): void {
    this.categoryService.getCategories().subscribe(data =>{
      this.allCategories = data;
    });
  }

  addCategory(id:number):void{
    this.category = id;
  }

  onItemSelect(item: Material){
    
  }

  addCont(minW:number, maxW:number, minH:number, maxH:number, minD:number, maxD:number){
    if(!minW || !maxW || !minH || !maxH || !minD || !maxD || // verifica se todos os campos estao preenchidos
      (minW>maxW || maxH<minH || maxD<minD) 
      || (minW==maxW || minH==maxH || minD==maxD)
      ||( minH<=0 || minD<=0 || minW<=0 || maxW<=0 || maxD<=0 || maxH<=0)// verificacao min max 
      ){
      this.toastr.info("Wrongly formatted dimensions")
    }else{
      let d : Array<number> = [] ;
      d = [2,minH,maxH,minD,maxD,minW,maxW];
      this.dimensions.push(d);
      this.toastr.success("Dimensao adicionada") ;
    }
    
  }

  addDisc(width:number,depth:number,h:number){
    if(!width || !depth || !h || width<=0 || depth<=0 || h<=0){
      this.toastr.info("Wrongly formatted dimensions");
    }else{
      let d :Array<number> =  [];
      d = [1,depth,width,h];
      this.dimensions.push(d);
      this.toastr.success("Dimensao adicionada") ;
    } 
  }
  
 
}
