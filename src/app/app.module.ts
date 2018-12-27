import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncomendasComponent } from './Component/encomendas/encomendas.component';
import { CatalogoComponent } from './Component/catalogo/catalogo.component';
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
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    EncomendasComponent,
    CatalogoComponent,
    EncomendaGestaoComponent,
    EncomendaDetailComponent,
    ItemGestaoComponent,
    ItemDetailComponent,
    ProdutoGestaoComponent,
    MateriaisComponent,
    ItemFilhoDetailComponent,
    ProductEditComponent,
    CriarProdutoComponent,
    RestricaoGestaoComponent,
    DimensoesGestaoComponent,
    RestricaoEditComponent,
    CriarCategoriaComponent,
    GerirCategoriasComponent,
    LoginComponent,
    EditarCategoriaComponent,
    GerirAcabamentosComponent,
    EditAcabamentosComponent,
    DashComponent


    
  ],
  imports: [
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
    })
  ],
  exports: [
    DemoMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
