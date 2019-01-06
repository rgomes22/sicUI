import { Component, OnInit, Input } from '@angular/core';
import { Produto } from '../../model/Produto';
import { ProdutosService } from '../../Services/produtos.service';
import { Colecao } from 'src/app/model/Colecao';
import { colecaoPutDTO } from 'src/app/DTOS/colecaoPutDTO';
import { ColecoesService } from 'src/app/Services/colecoesService';
import { ToastrService } from 'ngx-toastr';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-editar-colecao',
  templateUrl: './editar-colecao.component.html',
  styleUrls: ['./editar-colecao.component.css']
})
export class CollectionEditComponent implements OnInit {

  @Input() colection: Colecao;
  selectedProductId: number;
  produtos: Produto[];

  constructor(
    private colecoesService: ColecoesService,
    private produtosService: ProdutosService,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
    this.getProdutos();    
  }

  removeP(p: Produto){

    if(this.selectedProductId == 0){
      this.toastr.error("The space must contain an element", "Error");
    }else{
      let productId = parseInt(p.productId);
      this.colecoesService.removeProduto(this.colection.collectionId, productId).subscribe(c => {this.colection = c; this.toastr.success("Deleted"); this.ngOnInit();});
    }
  }


  editarColecao(col: Colecao, name: string, description: string) {
    if (!name &&!description) {
        this.toastr.error("All spaces must contain elements", "Error");
        return;
    }

    if(!name){
      name=col.collectionName;
    }

    if(!description){
      description=col.collectionDescription;
    }

    let collectionId = col.collectionId;
    let collectionName = name;
    let collectionDescription = description;

    this.colecoesService.putColecao(col.collectionId,
      {collectionId, collectionName, collectionDescription} as colecaoPutDTO).subscribe(c => {this.colection = c; this.toastr.success("Editado"); this.ngOnInit();});

    return
  
  }

  selectProduct(value: number): void{
    this.selectedProductId = value;
    console.log(value);
  }

  addProduct(col: Colecao){
    let collectionId = col.collectionId;

    if(this.selectedProductId == 0){
      this.toastr.error("The space must contain an element", "Error");
    }else{
      let productId = this.selectedProductId;
      this.colecoesService.addProduto(col.collectionId, productId).subscribe(c => {this.colection = c; this.toastr.success("Adicionado");this.ngOnInit()});
    }
    
  }

  onItemSelect(item: Produto) {

  }

  getProdutos(): void {
    this.produtosService.getProdutos().subscribe(data => {
      console.log('Produtos' + data);
      this.produtos = data;
    });

  }
}
