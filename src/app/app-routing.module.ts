import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EncomendasComponent } from './encomendas/encomendas.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { EncomendaGestaoComponent } from './encomenda-gestao/encomenda-gestao.component';
import { EncomendaDetailComponent } from './encomenda-detail/encomenda-detail.component';
import { ItemGestaoComponent } from './item-gestao/item-gestao.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ProdutoGestaoComponent } from './produto-gestao/produto-gestao.component';
import { MateriaisComponent } from './materiais/materiais.component';

import { ItemFilhoDetailComponent } from './item-filho-detail/item-filho-detail.component';

import { CriarProdutoComponent } from './criar-produto/criar-produto.component';

import {  RestricaoGestaoComponent } from './restricao-gestao/restricao-gestao.component';

import { DimensoesGestaoComponent } from './dimensoes-gestao/dimensoes-gestao.component';

import {  RestricaoEditComponent } from './restricao-edit/restricao-edit.component';



const routes: Routes = [
  {path: 'catalogo', component : CatalogoComponent},
  {path: 'encomenda', component : EncomendasComponent},
  {path: 'encomendas', component : EncomendaGestaoComponent},
  {path: 'encomendas/:id', component : EncomendaDetailComponent},
  {path: 'itens', component : ItemGestaoComponent},
  {path: 'itens/:id', component : ItemDetailComponent},
  {path: 'itens/:idPai/filho/:id',component : ItemFilhoDetailComponent},
  {path: 'produtos', component : ProdutoGestaoComponent},
  {path:  'materiais', component : MateriaisComponent},
  {path:  'criar-produto', component : CriarProdutoComponent},
  {path: 'restricao' , component : RestricaoGestaoComponent},

  {path: 'dimensoes', component : DimensoesGestaoComponent},

  {path:'restricao-edicao' , component : RestricaoEditComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
