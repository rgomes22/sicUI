import { Component, OnInit, Input } from '@angular/core';
import { Produto } from '../../model/Produto';
import { ProdutosService } from '../../Services/produtos.service';
import { Colecao } from 'src/app/model/Colecao';
import { colecaoPutDTO } from 'src/app/DTOS/colecaoPutDTO';
import { ColecoesService } from 'src/app/Services/colecoesService';
import { ToastrService } from 'ngx-toastr';
import { Alert } from 'selenium-webdriver';
import { ContinuousDimension } from 'src/app/model/ContinuousDimension';
import { DiscreetDimension } from 'src/app/model/DiscreetDimension';
import { DimensionsService } from 'src/app/Services/dimensions.service';

@Component({
  selector: 'app-ver-colecao',
  templateUrl: './ver-colecao.component.html',
  styleUrls: ['../../app.component.css']
})
export class VerColecaoComponent implements OnInit {

  @Input() colection: Colecao;
  selectedProductId: number;
  produtos: Produto[];
  selectedProduct: Produto;
  ProductContDimensions: ContinuousDimension[] = [];
  ProductDiscDimensions: DiscreetDimension[] = [];
  selectedContDim: ContinuousDimension;
  selectedDiscDim: DiscreetDimension;

  constructor(
    private colecoesService: ColecoesService,
    private produtosService: ProdutosService,
    private toastr: ToastrService,
    private dimensionService: DimensionsService,
  ) { }

  ngOnInit() {
    this.getProdutos();
  }

  onSelect(product: Produto): void {
    let id = parseInt(product.productId);
    this.produtosService.getProdutos().subscribe(p => {
      for (let index = 0; index < p.length; index++) {
        if (parseInt(p[index].productId) == id) {
          this.selectedProduct = p[index];
        }
      }
    });
    this.getDimensions(product.productId);
    this.selectedProduct = product;
  }
  
  private getDimensions(id : string){
    this.dimensionService.getProductContDim(id).subscribe(cd => {this.ProductContDimensions = cd; console.log(cd)});
    this.dimensionService.getProductDiscDim(id).subscribe(dd => {this.ProductDiscDimensions = dd; console.log(dd) });
  }

  getProdutos(): void {
    this.produtosService.getProdutos().subscribe(data => {
      console.log('Produtos' + data);
      this.produtos = data;
    });

  }
}
