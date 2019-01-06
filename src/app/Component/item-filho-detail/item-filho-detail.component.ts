import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Item } from '../../model/Item';
import { ItemService } from '../../Services/item.service';
import { criarItemFilhoDTO } from '../../DTOS/criarItemFilhoDTO';
import { MaterialFinish } from '../../model/MaterialFinish';
import { Produto } from '../../model/Produto';
import { ProdutosService } from '../../Services/produtos.service';
import { MaterialFinishService } from '../../Services/material-finish.service';

@Component({
  selector: 'app-item-filho-detail',
  templateUrl: './item-filho-detail.component.html',
  styleUrls: ['../../app.component.css']
})
export class ItemFilhoDetailComponent implements OnInit {
  @Input() item: Item;
  allMaterialFinishes: MaterialFinish[];
  allProdutos: Produto[];
  produto: Produto;
  ProductId: number;
  MaterialId: number;
  FinishId: number;
  MaterialIdEdit: number;
  FinishIdEdit: number;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private itemService: ItemService
    , private materialFinishService: MaterialFinishService,
    private ProdutosService: ProdutosService) { }

  ngOnInit() {

    this.getItem();
    this.getMfs();
    this.getProdutos();


  }

  getProduto(): void {
    if (!this.item.child) {
      alert("Nao pode aceder a itens PAI por aqui");
      this.goBack();
    }
    let idP = parseInt(this.item.idproduto);
    this.ProdutosService.getProduto(idP).subscribe(p => this.produto = p, p => console.log(p.productName));
  }

  getItem(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.itemService.getItem(id)
      .subscribe(item => this.item = item, () => console.log('oi'), () => this.getProduto());

    // this.location.go(this.location.path());

  }
  getProdutos(): void {
    this.ProdutosService.getProdutos().subscribe(p => this.allProdutos = p);

  }

  getMfs(): void {
    this.materialFinishService.getMaterialFinishes().subscribe(mfs => this.allMaterialFinishes = mfs);
  }

  goBack(): void {
    this.location.back();
  }

  remove(filho: Item): void {
    this.item.itemFilhos = this.item.itemFilhos.filter(h => h !== filho);
    this.itemService.removeItem(filho, this.item.id).subscribe(_=>this.ngOnInit());
    // this.location.go(this.location.path());
  }

  createFilho(Nome: string, Height: number, Depth: number, Width: number): void {
    if (!Height || !Width || !Depth || !Nome) {
      alert("TEM PARAMETROS EM FALTA");
      return;
    }
    if (!this.MaterialId || !this.FinishId || !this.ProductId) {
      alert("TEM DE SELECIONAR OPCOES NAS CAIXAS DE OPCAO");
      return;
    }
    //alert(ProductId + MaterialId);
    let MaterialId = this.MaterialId;
    let FinishId = this.FinishId;
    let ProductId = this.ProductId;
    const id = this.route.snapshot.paramMap.get('id');

    this.itemService.createChild({ Nome, ProductId, MaterialId, FinishId, Height, Depth, Width } as criarItemFilhoDTO, id).subscribe(it => { this.item.itemFilhos.push(it);this.ngOnInit() });
    // this.location.go(this.location.path());
  }

  editarItem(Nome: string, Height: number, Depth: number, Width: number): void {
    if (!Nome && !Height && !Depth && !Width && !this.MaterialIdEdit && !this.FinishIdEdit) {
      alert("TEM DE DEFINIR PARAMETROS DE EDIÇAO");
      return;
    }
    if (!Nome) {
      Nome = this.item.nome;
    }
    if (!Height) {
      Height = this.item.height;
    }
    if (!Depth) {
      Depth = this.item.depth;
    }
    if (!Width) {
      Width = this.item.width;
    }
    let MaterialId = 0;
    if (!this.MaterialIdEdit) {
      MaterialId = 1;
    } else {
      MaterialId = this.MaterialIdEdit;
    }
    let FinishId = 0;
    if (!this.FinishIdEdit) {
      FinishId = 1;
    } else {
      FinishId = this.FinishIdEdit
    }
    let ProductId = parseInt(this.item.idproduto);
    let id = this.item.id;
    let idPai = this.route.snapshot.paramMap.get('idPai');
    this.itemService.editChildItem({ Nome, ProductId, MaterialId, FinishId, Height, Depth, Width } as criarItemFilhoDTO, id,idPai).subscribe(it => {this.item = it;this.ngOnInit()});

  }

  productOp(value: number): void {
    this.ProductId = value;
    console.log(value);
    // alert(value);
  }
  materialOp(value: number): void {
    this.MaterialId = value;
    console.log(value);
    // alert(value);
  }
  finishOp(value: number): void {
    this.FinishId = value;
    console.log(value);
    // alert(value);
  }

  materialOpEdit(value: number): void {
    this.MaterialIdEdit = value;
    console.log(value);
    // alert(value);
  }
  finishOpEdit(value: number): void {
    this.FinishIdEdit = value;
    console.log(value);
    // alert(value);
  }

}
