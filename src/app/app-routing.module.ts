import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EncomendasComponent } from './Component/encomendas/encomendas.component';
import { CatalogoComponent } from './Component/catalogo/catalogo.component';
import { EncomendaGestaoComponent } from './Component/encomenda-gestao/encomenda-gestao.component';
import { EncomendaDetailComponent } from './Component/encomenda-detail/encomenda-detail.component';
import { ItemGestaoComponent } from './Component/item-gestao/item-gestao.component';
import { ItemDetailComponent } from './Component/item-detail/item-detail.component';
import { ProdutoGestaoComponent } from './Component/produto-gestao/produto-gestao.component';
import { MateriaisComponent } from './Component/materiais/materiais.component';

import { ItemFilhoDetailComponent } from './Component/item-filho-detail/item-filho-detail.component';

import { CriarProdutoComponent } from './Component/criar-produto/criar-produto.component';

import {  RestricaoGestaoComponent } from './Component/restricao-gestao/restricao-gestao.component';

import { DimensoesGestaoComponent } from './Component/dimensoes-gestao/dimensoes-gestao.component';

import {  RestricaoEditComponent } from './Component/restricao-edit/restricao-edit.component';

import { CriarCategoriaComponent } from './Component/criar-categoria/criar-categoria.component';

import { GerirCategoriasComponent } from './Component/gerir-categorias/gerir-categorias.component';

import { LoginComponent } from './Component/login/login.component';

import {GerirAcabamentosComponent} from './Component/gerir-acabamentos/gerir-acabamentos.component'
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
  {path:'gerirCategoria' , component : GerirCategoriasComponent},
  {path:'criarCategoria' , component : CriarCategoriaComponent},
  {path:'gerirAcabamentos' , component : GerirAcabamentosComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
