import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError,map, tap } from 'rxjs/operators';

import { Material } from '../model/Material';
import {Price } from '../model/Price';
import { priceDTO } from '../DTOS/priceDTO';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class MateriaisService {

  private urlGetMateriais = 'https://3db-sic-webapi.azurewebsites.net/api/Material';
  private urlPostMateriais ='https://3db-sic-webapi.azurewebsites.net/api/Material';
  //private urlDelete = 

  constructor(
    private httpClient: HttpClient
  ) { }


  private log(message: string) {
    console.log(`Material service: ${message}`);
  };

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getMateriais(): Observable<Material[]>{
    return this.httpClient.get<Material[]>(this.urlGetMateriais).pipe(
      tap(_ => this.log('CARREGA MATERIAIS')),
      catchError(this.handleError('get materiais',[]))
    )
  };

  createMaterial(material: Material): Observable<Material>{
    return this.httpClient.post<Material>(this.urlPostMateriais,material,httpOptions).pipe(
      tap((material: Material)=> this.log('ADICIONADA')),
      catchError(this.handleError<Material>('ADICIONAR Material'))
    );
  }

  
  deleteMaterial(material : Material): Observable<Material>{
    const url2 = `${this.urlGetMateriais}/${material.materialId}`;
    return this.httpClient.delete<Material>(url2,httpOptions).pipe(
      tap(_ => this.log(`Material delete`)),
      catchError(this.handleError<Material>('ERRO DELETE MATERIAL'))
    );
  }

  editMaterial(material :Material): Observable<Material>{
    const url2 = `${this.urlGetMateriais}/${material.materialId}`;
    return this.httpClient.put<Material>(url2,material,httpOptions).pipe(
      tap((material: Material)=> this.log('ALterado')),
      catchError(this.handleError<Material>('Erro Ao Alterar'))
    );
  }

  addPriceMaterial(id:string, p:Price): Observable<Price>{
    const url2 = `${this.urlGetMateriais}/${id}/addPrice`;
    return this.httpClient.post<Price>(url2,p,httpOptions).pipe(
      tap((p: Price)=> this.log('Preço ADICIONADO')),
      catchError(this.handleError<Price>('ADICIONAR Preco a Material'))
    );
  }

  getMaterialPrice(id:string): Observable<priceDTO>{
    const url2 = `${this.urlGetMateriais}/${id}/activePrice`;
    return this.httpClient.get<priceDTO>(url2).pipe(
      tap(_ => this.log('Carrega Preco Material')),
      catchError(this.handleError<priceDTO>('get Preco de Material'))
    )
  }

  getMaterialPriceHistory(id:string): Observable<priceDTO[]>{
    const url2 = `${this.urlGetMateriais}/${id}/priceHistory`;
    return this.httpClient.get<priceDTO[]>(url2).pipe(
      tap(_ => this.log('Loaded Price History')),
      catchError(this.handleError('get preco history',[]))
    )
  }

}
