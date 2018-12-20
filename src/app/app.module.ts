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
import { FormsModule } from '@angular/forms';
import { CriarProdutoComponent } from './Component/criar-produto/criar-produto.component';
import { RestricaoGestaoComponent } from './Component/restricao-gestao/restricao-gestao.component';

import { DimensoesGestaoComponent } from './Component/dimensoes-gestao/dimensoes-gestao.component';

import { RestricaoEditComponent } from './Component/restricao-edit/restricao-edit.component';



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
    RestricaoEditComponent


    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
