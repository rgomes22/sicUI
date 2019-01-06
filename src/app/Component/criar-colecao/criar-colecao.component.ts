import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { ProdutosService } from 'src/app/Services/produtos.service';
import { Produto } from 'src/app/model/Produto';
import { ColecoesService } from 'src/app/Services/colecoesService';
import { ToastrService } from 'ngx-toastr';
import { criarColecaoDTO } from 'src/app/DTOS/criarColecaoDTO';
import { Colecao } from 'src/app/model/Colecao';

@Component({
    selector: 'app-criar-colecao',
    templateUrl: './criar-colecao.component.html',
    styleUrls: ['../../app.component.css']
})

export class CriarColecaoComponent implements OnInit {
    titulo = 'Criar Coleção';
    produtos: Produto[];

    //dropdown variables
    disable = false;
    ShowFilter = false;
    limiteSelection = false;
    selectedProdutos: Produto[] = [];
    dropdownSettings: any = {};
    dropdownList = [];

    constructor(
        private location: Location,
        private produtosService: ProdutosService,
        private colecoesService: ColecoesService,
        private toastr: ToastrService,
    ) { }

    ngOnInit() {
        this.getProdutos();
        this.selectedProdutos = [];
        this.dropdownSettings = {
            singleSelection: false,
            idField: 'productlId',
            textField: 'productName',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 10,
            allowSearchFilter: true
        };
    }


    goBack(): void {
        this.location.back();
    }

    post(collectionName: string, collectionDescription: string): void {
        if (!collectionName || !collectionDescription) {
            this.toastr.error("All spaces must contain elements", "Error");
            return;
        }
       console.log(collectionName);
       console.log(collectionDescription);
        this.colecoesService.postColecao({collectionName,collectionDescription}as criarColecaoDTO).subscribe(col => this.toastr.success("Collection Added", "Success"));

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