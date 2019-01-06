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
import {AllRoleGuardService} from './Services/all-role-guard.service';

const routes: Routes = [
  {path: 'catalogo', component : CatalogoComponent},
  {path: 'encomenda', component : EncomendasComponent, canActivate: [RoleGuard], data: {expectedRole: 'cliente', path:'encomenda'}},
  {path: 'gerir-colecao', component : GerirColecaoComponent, canActivate: [RoleGuard], data: {expectedRole: 'gestor', path:'gerir-colecao' }},
  {path: 'edit-colecao', component : EditColecaoComponent, canActivate: [RoleGuard], data: {expectedRole: 'gestor', path:'edit-colecao' }},
  {path: 'editar-colecao', component : CollectionEditComponent, canActivate: [RoleGuard], data: {expectedRole: 'gestor', path:'editar-colecao' }},
  {path: 'encomendas', component : EncomendaGestaoComponent, canActivate: [RoleGuard], data: {expectedRole: 'cliente', path:'encomendas' }},
  {path: 'encomendas/:id', component : EncomendaDetailComponent, canActivate: [RoleGuard], data: {expectedRole: 'cliente', path:'encomendas' }},
  {path: 'itens', component : ItemGestaoComponent, canActivate: [RoleGuard], data: {expectedRole: 'cliente', path:'itens' }},
  {path: 'itens/:id', component : ItemDetailComponent, canActivate: [RoleGuard], data: {expectedRole: 'cliente', path:'itens' }},
  {path: 'itens/:idPai/filho/:id',component : ItemFilhoDetailComponent, canActivate: [RoleGuard], data: {expectedRole: 'cliente', path:'itens' }},
  {path: 'produtos', component : ProdutoGestaoComponent, canActivate: [RoleGuard], data: {expectedRole: 'gestor', path:'gestor' }},
  {path:  'materiais', component : MateriaisComponent, canActivate: [RoleGuard], data: {expectedRole: 'gestor', path:'materiais' }},
  {path:  'criar-produto', component : CriarProdutoComponent, canActivate: [RoleGuard], data: {expectedRole: 'gestor', path:'criar-produto' }},
  {path: 'restricao' , component : RestricaoGestaoComponent,canActivate: [RoleGuard], data: {expectedRole: 'gestor', path:'restricao' }},
  {path: 'planos', component : PlanoGestaoComponent, canActivate: [RoleGuard], data: {expectedRole: 'gestor', path:'planos' }},
  {path: 'planos/:id', component: PlanoDetailComponent, canActivate: [RoleGuard], data: {expectedRole: 'gestor', path:'planos' }},
  {path: 'dimensoes', component : DimensoesGestaoComponent, canActivate: [RoleGuard], data: {expectedRole: 'gestor', path:'dimensoes' }},
  {path:'restricao-edicao' , component : RestricaoEditComponent, canActivate: [RoleGuard], data: {expectedRole: 'gestor', path:'restricao-edicao' }},
  {path:'gerirCategoria' , component : GerirCategoriasComponent, canActivate: [RoleGuard], data: {expectedRole: 'gestor', path:'gerirCategoria' }},
  {path:'criarCategoria' , component : CriarCategoriaComponent, canActivate: [RoleGuard], data: {expectedRole: 'gestor', path:'criarCategoria' }}, //canActivate: [RoleGuard], data: {expectedRole: 'gestor'}},
  //{path:'criarCategoria' , component : CriarCategoriaComponent, canActivate: [RoleGuard], data: {expectedRole: 'gestor', path:'criarCategoria'}},
  //{path:'criar-colecao' , component : CriarColecaoComponent, canActivate: [RoleGuard], data: {expectedRole: 'gestor', path:'criarCategoria'}},
  {path:'criar-colecao' , component : CriarColecaoComponent, canActivate: [RoleGuard], data: {expectedRole: 'gestor', path:'criar-colecao' }},
  {path:'criar-catalogo' , component : CriarCatalogoComponent, canActivate: [RoleGuard], data: {expectedRole: 'gestor', path:'criar-catalogo' }},
  {path: 'gerir-catalogo', component : GerirCatalogoComponent, canActivate: [RoleGuard], data: {expectedRole: 'gestor', path:'gerir-catalogo' }},
  {path: 'edit-catalogo', component : EditCatalogoComponent, canActivate: [RoleGuard], data: {expectedRole: 'gestor', path:'edit-catalogo' }},
  {path: 'editar-catalogo', component : CatalogEditComponent, canActivate: [RoleGuard], data: {expectedRole: 'gestor', path:'editar-catalogo' }},
  { path: 'error', component:ErrorPageComponent },
  {path:'gerirAcabamentos' , component : GerirAcabamentosComponent, canActivate: [RoleGuard], data: {expectedRole: 'gestor', path:'gerirAcabamentos' }},
  {path: 'login', component: LoginComponent, canActivate: [AuthLogin]},
  {path: 'register', component: RegisterComponent, canActivate: [AuthLogin]},
  {path: 'criarAcabamento', component: CriarAcabamentoComponent, canActivate: [RoleGuard], data: {expectedRole: 'gestor', path:'criarAcabamento' }},
  {path: 'submeterEncomenda', component: SubmeterEncomendaComponent, canActivate: [RoleGuard], data: {expectedRole: 'cliente', path:'submeterEncomenda' }},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
