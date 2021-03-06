import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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

import { ProductEditComponent } from './Component/product-edit/product-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CriarProdutoComponent } from './Component/criar-produto/criar-produto.component';
import { RestricaoGestaoComponent } from './Component/restricao-gestao/restricao-gestao.component';

import { DimensoesGestaoComponent } from './Component/dimensoes-gestao/dimensoes-gestao.component';
import {EditAcabamentosComponent} from './Component/edit-acabamentos/edit-acabamentos.component'
import { RestricaoEditComponent } from './Component/restricao-edit/restricao-edit.component';
import { CriarCategoriaComponent } from './Component/criar-categoria/criar-categoria.component';
import { GerirCategoriasComponent } from './Component/gerir-categorias/gerir-categorias.component';
import { LoginComponent } from './Component/login/login.component';
import { EditarCategoriaComponent } from './Component/editar-categoria/editar-categoria.component';
import {GerirAcabamentosComponent} from './Component/gerir-acabamentos/gerir-acabamentos.component'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DemoMaterialModule} from './material.module';
import { JwtModule } from '@auth0/angular-jwt';
import { DashComponent } from './Component/dash/dash.component';
import { ToastrModule } from 'ngx-toastr';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { RegisterComponent, DialogContent } from './Component/register/register.component';
import { CriarAcabamentoComponent } from './Component/criar-acabamento/criar-acabamento.component';


import { CriarColecaoComponent } from './Component/criar-colecao/criar-colecao.component';
import { EditColecaoComponent } from './Component/edit-colecao/edit-colecao.component';
import { CollectionEditComponent } from './Component/editar-colecao/editar-colecao.component';
import { ErrorPageComponent } from './Component/error-page/error-page.component';
import { LogService } from './shared/log.service';
import { ThreeComponent } from './Component/three/three.component';


import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DlDateTimePickerDateModule } from 'angular-bootstrap-datetimepicker';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker'

import { PlanoGestaoComponent } from './Component/plano-gestao/plano-gestao.component';
import { PlanoDetailComponent } from './Component/plano-detail/plano-detail.component';
import { TokenInterceptorService } from './token-interceptor.service';

import{SubmeterEncomendaComponent} from './Component/submeter-encomenda/submeter-encomenda.component'
import { MaterialFinishGestaoComponent } from './Component/material-finish-gestao/material-finish-gestao.component'
import { CriarCatalogoComponent } from './Component/criar-catalogo/criar-catalogo.component';
import { GerirCatalogoComponent } from './Component/gerir-catalogo/gerir-catalogo.component'
import { EditCatalogoComponent } from './Component/edit-catalogo/edit-catalogo.component';
import { CatalogEditComponent } from './Component/editar-catalogo/editar-catalogo.component';

import { VerColecoesComponent } from './Component/ver-colecoes/ver-colecoes.component';
import { VerColecaoComponent } from './Component/ver-colecao/ver-colecao.component';
import { VerCatalogoComponent } from './Component/ver-catalogo/ver-catalogo.component';
import { VerCatalogosComponent } from './Component/ver-catalogos/ver-catalogos.component';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    EncomendasComponent,
    CatalogoComponent,
    GerirColecaoComponent,
    EncomendaGestaoComponent,
    EncomendaDetailComponent,
    ItemGestaoComponent,
    ItemDetailComponent,
    ProdutoGestaoComponent,
    MateriaisComponent,
    ItemFilhoDetailComponent,
    ProductEditComponent,
    CriarProdutoComponent,
    CriarColecaoComponent,
    EditColecaoComponent,
    CollectionEditComponent,
    RestricaoGestaoComponent,
    DimensoesGestaoComponent,
    RestricaoEditComponent,
    CriarCategoriaComponent,
    GerirCategoriasComponent,
    LoginComponent,
    EditarCategoriaComponent,
    GerirAcabamentosComponent,
    EditAcabamentosComponent,
    DashComponent,
    RegisterComponent,
    CriarAcabamentoComponent,
    ErrorPageComponent,
    ThreeComponent,
    DialogContent,
    PlanoGestaoComponent,
    PlanoDetailComponent,
    SubmeterEncomendaComponent,
    CriarCatalogoComponent,
    GerirCatalogoComponent,
    EditCatalogoComponent,
    CatalogEditComponent,
    VerColecoesComponent,
    VerColecaoComponent,
    VerCatalogoComponent,
    VerCatalogosComponent,
    MaterialFinishGestaoComponent,
  ],
  imports: [
    NgbModule,
    AngularDateTimePickerModule,
    DlDateTimePickerDateModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    ReactiveFormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter
      }
    }),
    ToastrModule.forRoot(),
  ],
  exports: [
    DemoMaterialModule,
    FormsModule
  ],
  entryComponents:[DialogContent],
  providers: [DashComponent, LogService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
