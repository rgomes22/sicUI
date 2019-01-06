import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Colecao } from 'src/app/model/Colecao';
import { Catalogo } from 'src/app/model/Catalogo';
import { CatalogoService } from 'src/app/Services/catalogoService';

@Component({
  selector: 'app-ver-catalogos',
  templateUrl: './ver-catalogos.component.html',
  styleUrls: ['../../app.component.css']
})
export class VerCatalogosComponent implements OnInit {
  titulo = 'Ver Catálogos';
  selectedCatalogo : Catalogo;
  listagem = 'Lista de Catálogos';
  allCatalogos: Catalogo[];

  onSelect(catalog: Catalogo): void {
    let id = parseInt(catalog.catalogId);
    this.catalogoService.getCatalogo(id).subscribe(d=>this.selectedCatalogo=d);
 
  }

  constructor(
    private location: Location, 
    private catalogoService: CatalogoService
  ) { }

  ngOnInit() {
    this.getCatalogos();
  
  }

  getColecao(colection: Colecao){
    let id = parseInt(colection.collectionId);
    this.catalogoService.getCatalogo(id).subscribe(d=>this.selectedCatalogo=d);
  } 

  goBack(): void {
  this.location.back();
}

  getCatalogos(): void {
    
    this.catalogoService.getCatalogos().subscribe(data =>{
      console.log('Catálogos'+data);
      this.allCatalogos = data;
    });
  }

}
