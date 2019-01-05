import { Component, OnInit, Input } from '@angular/core';
import { Produto } from '../../model/Produto';
import { ProdutosService } from '../../Services/produtos.service';
import { Colecao } from 'src/app/model/Colecao';
import { colecaoPutDTO } from 'src/app/DTOS/colecaoPutDTO';
import { ToastrService } from 'ngx-toastr';
import { Alert } from 'selenium-webdriver';
import { CatalogoService } from 'src/app/Services/catalogoService';
import { Catalogo } from 'src/app/model/Catalogo';
import { catalogoPutDTO } from 'src/app/DTOS/catalogoPutDTO';

@Component({
  selector: 'app-editar-catalogo',
  templateUrl: './editar-catalogo.component.html',
  styleUrls: ['./editar-catalogo.component.css']
})
export class CatalogEditComponent implements OnInit {

  @Input() catalog: Catalogo;
  selectedProductId: number;
  produtos: Produto[];

  constructor(
    private catalogoService: CatalogoService,
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
      this.catalogoService.removeProduto(this.catalog.catalogId, productId).subscribe(c => this.catalog = c);
    }
  }


  editarCatalogo(cat: Catalogo, name: string, description: string) {
    if (!name &&!description) {
        this.toastr.error("All spaces must contain elements", "Error");
        return;
    }

    if(!name){
      name=cat.catalogName;
    }

    if(!description){
      description=cat.catalogDescription;
    }

    let catalogId = cat.catalogId;
    let catalogName = name;
    let catalogDescription = description;

    this.catalogoService.putCatalogo(cat.catalogId,
      {catalogId, catalogName, catalogDescription} as catalogoPutDTO).subscribe(c => this.catalog = c);

    return
  
  }

  selectProduct(value: number): void{
    this.selectedProductId = value;
    console.log(value);
  }

  addProduct(cat: Catalogo){
    let catalogId = cat.catalogId;

    if(this.selectedProductId == 0){
      this.toastr.error("The space must contain an element", "Error");
    }else{
      let productId = this.selectedProductId;
      this.catalogoService.addProduto(cat.catalogId, productId).subscribe(c => this.catalog = c);
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
