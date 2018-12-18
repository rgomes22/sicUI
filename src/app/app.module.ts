import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncomendasComponent } from './encomendas/encomendas.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { EncomendaGestaoComponent } from './encomenda-gestao/encomenda-gestao.component';
import { EncomendaDetailComponent } from './encomenda-detail/encomenda-detail.component';
import { ItemGestaoComponent } from './item-gestao/item-gestao.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ProdutoGestaoComponent } from './produto-gestao/produto-gestao.component';
import { MateriaisComponent } from './materiais/materiais.component';

import { ItemFilhoDetailComponent } from './item-filho-detail/item-filho-detail.component';

import { ProductEditComponent } from './product-edit/product-edit.component';
import { FormsModule } from '@angular/forms';
import { CriarProdutoComponent } from './criar-produto/criar-produto.component';
import { RestricaoGestaoComponent } from './restricao-gestao/restricao-gestao.component';


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
    RestricaoGestaoComponent

    
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
