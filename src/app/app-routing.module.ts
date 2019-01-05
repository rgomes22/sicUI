import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, CanActivate  } from '@angular/router';

import { EncomendasComponent } from './Component/encomendas/encomendas.component';
import { CatalogoComponent } from './Component/catalogo/catalogo.component';
import { GerirColecaoComponent } from './Component/gerir-colecao/gerir-colecao.component';
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

import { CriarColecaoComponent } from './Component/criar-colecao/criar-colecao.component';

import { EditColecaoComponent } from './Component/edit-colecao/edit-colecao.component';

import { CollectionEditComponent } from './Component/editar-colecao/editar-colecao.component';

import { GerirCategoriasComponent } from './Component/gerir-categorias/gerir-categorias.component';

import { LoginComponent } from './Component/login/login.component';

import { AuthGuardService as AuthGuard } from './Services/auth-guard.service';

import {   RoleGuardService as RoleGuard } from './Services/role-guard.service';

import { AuthGuardLoginService as AuthLogin } from './Services/auth-guard-login.service'

import { PlanoGestaoComponent} from './Component/plano-gestao/plano-gestao.component';
import { PlanoDetailComponent } from './Component/plano-detail/plano-detail.component';

import {GerirAcabamentosComponent} from './Component/gerir-acabamentos/gerir-acabamentos.component'
import { ErrorPageComponent } from './Component/error-page/error-page.component';
import { RegisterComponent } from './Component/register/register.component';
import { CriarAcabamentoComponent } from './Component/criar-acabamento/criar-acabamento.component';
import { SubmeterEncomendaComponent } from './Component/submeter-encomenda/submeter-encomenda.component';

import { CriarCatalogoComponent } from './Component/criar-catalogo/criar-catalogo.component';
import { GerirCatalogoComponent } from './Component/gerir-catalogo/gerir-catalogo.component'
import { EditCatalogoComponent } from './Component/edit-catalogo/edit-catalogo.component';
import { CatalogEditComponent } from './Component/editar-catalogo/editar-catalogo.component';

const routes: Routes = [
  {path: 'catalogo', component : CatalogoComponent},
  {path: 'encomenda', component : EncomendasComponent},
  {path: 'gerir-colecao', component : GerirColecaoComponent},
  {path: 'edit-colecao', component : EditColecaoComponent},
  {path: 'editar-colecao', component : CollectionEditComponent},
  {path: 'encomendas', component : EncomendaGestaoComponent},
  {path: 'encomendas/:id', component : EncomendaDetailComponent},
  {path: 'itens', component : ItemGestaoComponent},
  {path: 'itens/:id', component : ItemDetailComponent},
  {path: 'itens/:idPai/filho/:id',component : ItemFilhoDetailComponent},
  {path: 'produtos', component : ProdutoGestaoComponent},
  {path:  'materiais', component : MateriaisComponent},
  {path:  'criar-produto', component : CriarProdutoComponent},
  {path: 'restricao' , component : RestricaoGestaoComponent},
  {path: 'planos', component : PlanoGestaoComponent},
  {path: 'planos/:id', component: PlanoDetailComponent},
  {path: 'dimensoes', component : DimensoesGestaoComponent},
  {path:'restricao-edicao' , component : RestricaoEditComponent},
  {path:'gerirCategoria' , component : GerirCategoriasComponent},
  {path:'criarCategoria' , component : CriarCategoriaComponent}, //canActivate: [RoleGuard], data: {expectedRole: 'gestor'}},
  //{path:'criarCategoria' , component : CriarCategoriaComponent, canActivate: [RoleGuard], data: {expectedRole: 'gestor', path:'criarCategoria'}},
  //{path:'criar-colecao' , component : CriarColecaoComponent, canActivate: [RoleGuard], data: {expectedRole: 'gestor', path:'criarCategoria'}},
  {path:'criar-colecao' , component : CriarColecaoComponent},
  {path:'criar-catalogo' , component : CriarCatalogoComponent},
  {path: 'gerir-catalogo', component : GerirCatalogoComponent},
  {path: 'edit-catalogo', component : EditCatalogoComponent},
  {path: 'editar-catalogo', component : CatalogEditComponent},
  { path: 'error', component:ErrorPageComponent },
  {path:'gerirAcabamentos' , component : GerirAcabamentosComponent},
  {path: 'login', component: LoginComponent, canActivate: [AuthLogin]},
  {path: 'register', component: RegisterComponent, canActivate: [AuthLogin]},
  {path: 'criarAcabamento', component: CriarAcabamentoComponent},
  {path: 'submeterEncomenda', component: SubmeterEncomendaComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
