import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ContinuousDimension } from '../../model/ContinuousDimension';
import { DiscreetDimension } from '../../model/DiscreetDimension';
import { DimensionsService } from '../Services/dimensions.service';
import { Produto } from '../../model/Produto';
import { ProdutosService } from '../Services/produtos.service';
import { CDPutDTO } from '../../DTOS/CDPutDTO';
import { DDPutDTO } from '../../DTOS/DDPutDTO';
import { ContinuousDimensionPostDTO } from '../../DTOS/ContinuousDimensionPostDTO';
import { DiscreetDimensionPostDTO } from '../../DTOS/DiscreetDimensionPostDTO';

@Component({
  selector: 'app-dimensoes-gestao',
  templateUrl: './dimensoes-gestao.component.html',
  styleUrls: ['../../app.component.css']
})
export class DimensoesGestaoComponent implements OnInit {

  ProductContDimensions: ContinuousDimension[]=[];
  ProductDiscDimensions: DiscreetDimension[]=[];
  selectedContDim : ContinuousDimension;
  selectedDiscDim : DiscreetDimension;
  selectedProd : Produto;
  allProducts : Produto[];
  putCD : CDPutDTO;
  putDD : DDPutDTO;
  postCD : ContinuousDimensionPostDTO;
  postDD : DiscreetDimensionPostDTO;
  

  constructor(private location: Location, private dimensionService : DimensionsService, private produtoService : ProdutosService) { }

  ngOnInit() {
    this.getProdutos();
    this.initPuts();
  }

  private initPuts(){
    this.putCD = new CDPutDTO;
    this.putDD = new DDPutDTO;
    this.postCD = new ContinuousDimensionPostDTO;
    this.postDD = new DiscreetDimensionPostDTO;
  }
  private getProdutos(){
    this.produtoService.getProdutos().subscribe(data => this.allProducts = data);
  }
  private getDimensions(id : string){
    this.dimensionService.getProductContDim(id).subscribe(cd => {this.ProductContDimensions = cd; console.log(cd)});
    this.dimensionService.getProductDiscDim(id).subscribe(dd => {this.ProductDiscDimensions = dd; console.log(dd) });
  }

  onSelectProduto(p:Produto): void{
    this.selectedContDim = undefined;
    this.selectedDiscDim = undefined;
    this.selectedProd = p;
    this.getDimensions(p.productId);
  }

  goBack(): void {
    this.location.back();
  }

  onSelectCD(cd: ContinuousDimension): void {

    this.selectedContDim = cd;
  }

  onSelectDD(dd: DiscreetDimension): void {
    this.selectedDiscDim = dd;
  }

  editContDim(minWidthValue:number, maxWidthValue:number, minHeightValue:number, maxHeightValue:number, minDepthValue:number, maxDepthValue:number){
    if(!minWidthValue||!minHeightValue||!minDepthValue||!maxHeightValue||!maxWidthValue||!maxDepthValue){
      alert("all spaces must have numbers");
    }
    
    this.putCD.DimensionId = this.selectedContDim.dimensionId; 
    this.putCD.ProductId = parseInt(this.selectedProd.productId);
    this.putCD.minHeightValue = minHeightValue;
    this.putCD.maxHeightValue = maxHeightValue;
    this.putCD.minDepthValue = minDepthValue;
    this.putCD.maxDepthValue = maxDepthValue;
    this.putCD.minWidthValue = minWidthValue;
    this.putCD.maxWidthValue = maxWidthValue;

    this.dimensionService.putContDim(this.putCD,this.putCD.DimensionId).subscribe(c => {console.log(c)});
    this.getDimensions(this.selectedProd.productId);
  }

  editDiscDim(width:number, depth:number, height:number){
    if(!width||!depth||!height){
      alert("all spaces must have numbers");
    }
    this.putDD.DimensionId = this.selectedDiscDim.dimensionId;
    this.putDD.ProductId = parseInt(this.selectedProd.productId);
    this.putDD.DepthValue = depth;
    this.putDD.HeightValue = height;
    this.putDD.WidthValue = width;

    this.dimensionService.putDiscDim(this.putDD,this.putDD.DimensionId).subscribe(d=> {console.log(d)});
  }

  criarCont(minW: number,maxW:number,minH:number,maxH:number,minD:number,maxD:number){
    if(!minW||!maxW||!minH||!maxH||!minD||!maxD){
      alert("all spaces must have numbers");
    }
    this.postCD.productId = parseInt(this.selectedProd.productId);
    this.postCD.minWidthValue = minW;
    this.postCD.maxWidthValue = maxW;
    this.postCD.minHeightValue = minH;
    this.postCD.maxHeightValue = maxH;
    this.postCD.minDepthValue = minD;
    this.postCD.maxDepthValue = maxD;

    this.dimensionService.postContDim(this.postCD).subscribe(p=>{console.log(p)});
  }

  criarDisc(minDW:number,minDD:number,minDH:number){
    if(!minDD||!minDW||!minDH){
      alert("all spaces must have numbers");
    }

    this.postDD.productId = parseInt(this.selectedProd.productId);
    this.postDD.HeightValue = minDH;
    this.postDD.WidthValue = minDW;
    this.postDD.DepthValue = minDD;
    this.dimensionService.postDiscDim(this.postDD).subscribe(p=>{console.log(p)});
  }

  apagarCont(){
    if(this.selectedContDim){
      this.dimensionService.deleteContDim(this.selectedContDim.dimensionId).subscribe();
    }
  }

  apagarDisc(){
    if(this.selectedDiscDim){
      this.dimensionService.deleteDiscDim(this.selectedDiscDim.dimensionId).subscribe();
    }
  }

}
