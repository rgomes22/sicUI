import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { ProdutosService } from 'src/app/Services/produtos.service';
import { Produto } from 'src/app/model/Produto';
import { ToastrService } from 'ngx-toastr';
import { Catalogo } from 'src/app/model/Catalogo';
import { criarCatalogoDTO } from 'src/app/DTOS/criarCatalogoDTO';
import { CatalogoService } from 'src/app/Services/catalogoService';

@Component({
    selector: 'app-criar-catalogo',
    templateUrl: './criar-catalogo.component.html',
    styleUrls: ['../../app.component.css']
})

export class CriarCatalogoComponent implements OnInit {
    titulo = 'Criar Catálogo';
    produtos: Produto[];

    
    selectedProdutos: Produto[] = [];
    

    constructor(
        private location: Location,
        private produtosService: ProdutosService,
        private toastr: ToastrService,
        private catalogoService: CatalogoService
    ) { }

    ngOnInit() {
        this.getProdutos();
        this.selectedProdutos = [];
    }


    goBack(): void {
        this.location.back();
    }

    post(catalogName: string, catalogDescription: string): void {
        if (!catalogName || !catalogDescription) {
            this.toastr.error("All spaces must contain elements", "Error");
            return;
        }
       console.log(catalogName);
       console.log(catalogDescription);
        this.catalogoService.postCatalogo({catalogName,catalogDescription}as criarCatalogoDTO).subscribe(col => this.toastr.success("Catalog Added", "Success"));

    }

    onItemSelect(item: Produto){
    }

    getProdutos(): void {
        this.produtosService.getProdutos().subscribe(data => {
            console.log('Produtos' + data);
            this.produtos = data;
        });
    }

}