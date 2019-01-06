import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Catalogo } from 'src/app/model/Catalogo';
import { CatalogoService } from 'src/app/Services/catalogoService';


@Component({
  selector: 'app-edit-catalogo',
  templateUrl: './edit-catalogo.component.html',
  styleUrls: ['../../app.component.css']
})
export class EditCatalogoComponent implements OnInit {
  titulo = 'Editar Catálogos';
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

  getCatalogo(catalog: Catalogo){
    let id = parseInt(catalog.catalogId);
    this.catalogoService.getCatalogo(id).subscribe(d=>this.selectedCatalogo=d);
  } 

  goBack(): void {
  this.location.back();
}

getCatalogos(): void {
    this.catalogoService.getCatalogos().subscribe(data =>{
      console.log('Colecões'+data);
      this.allCatalogos = data;
    });
  }

  //delete do Catálogo
  delete(catalog: Catalogo): void {
    this.allCatalogos = this.allCatalogos.filter(h => h !== catalog);
    this.catalogoService.delete(catalog.catalogId).subscribe();
  }

}
