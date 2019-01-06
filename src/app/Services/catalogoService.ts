import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Colecao } from '../model/Colecao';
import { colecaoPutDTO } from '../DTOS/colecaoPutDTO';
import { criarColecaoDTO } from '../DTOS/criarColecaoDTO';
import { Catalogo } from '../model/Catalogo';
import { catalogoPutDTO } from '../DTOS/catalogoPutDTO';
import { criarCatalogoDTO } from '../DTOS/criarCatalogoDTO';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})

export class CatalogoService {

  //private urlSicCatalogo ='' ; 
  private urlGetCatalogos = 'https://3db-sic-webapi.azurewebsites.net/api/Catalog';
  private urlPostCatalogo = 'https://3db-sic-webapi.azurewebsites.net/api/Catalog';
  private urlPutCatalogo = 'https://3db-sic-webapi.azurewebsites.net/api/Catalog';
  private urlAddProduto = 'https://3db-sic-webapi.azurewebsites.net/api/Catalog';
  constructor(private httpClient: HttpClient) { }

  getCatalogos(): Observable<Catalogo[]> {
    return this.httpClient.get<Catalogo[]>(this.urlGetCatalogos).pipe(
      tap(_ => this.log('CARREGA CATÁLOGOS')),
      catchError(this.handleError('Erro no get catálogos', []))
    )

  };

  putCatalogo(id: string, catalogo: catalogoPutDTO): Observable<Catalogo> {
    const url2 = `${this.urlPutCatalogo}/${id}`;
    return this.httpClient.put<Catalogo>(url2, catalogo, httpOptions).pipe(
      tap(_ => this.log(`PUT CATÁLOGOS`)),
      catchError(this.handleError<Catalogo>(`Erro no put catálogos`))
    );
  }

  getCatalogo(id: number): Observable<Catalogo> {
    const url = `${this.urlGetCatalogos}/${id}`;
    return this.httpClient.get<Catalogo>(url).pipe(
      tap(_ => this.log(`CARREGA CATÁLOGO`)),
      catchError(this.handleError<Catalogo>(`Erro no get catálogo`))
    );
  }
  //Post do catálogo 
  //it calls HttpClient.post()
  //it expects the server to generates an id for the new catalog, which it returns 
  //in the Observable<Catalogo> to the caller.
  postCatalogo(catalogo:criarCatalogoDTO): Observable<Catalogo>{
      return this.httpClient.post<Catalogo>(this.urlPostCatalogo,catalogo,httpOptions).pipe(
      tap((colecao:Catalogo)=> this.log('CATÁLOGO ADICIONADO')),
      catchError(this.handleError<Catalogo>('Erro no post do catálogo'))
      );
  }

  /*Delete do catálogo
  it calls HttpClient.delete.
  the URL is the PRODUCT resource URL plus the id of the catalog to delete
  don't send data as you did with put and post.
  still send the httpOptions. 
  */
  delete(catalogo: string): Observable<Catalogo> {
    const id = catalogo
    const url = `${this.urlGetCatalogos}/${id}`;
    return this.httpClient.delete<Catalogo>(url, httpOptions).pipe(
      tap(_ => this.log(`DELETE DA COLEÇÃO`)),
      catchError(this.handleError<Catalogo>('Erro no delete do catálogo'))
    );
  }

  addProduto(id: string, productId: number): Observable<Catalogo>{
    const url2 = `${this.urlAddProduto}/${id}/add/${productId}`;
    return this.httpClient.put<Catalogo>(url2, httpOptions).pipe(
      tap(_ => this.log(`ADD PRODUTO`)),
      catchError(this.handleError<Catalogo>(`Erro no add produto do catálogo`))
    );
  }

  removeProduto(id: string, productId: number): Observable<Catalogo>{
    const url2 = `${this.urlAddProduto}/${id}/delete/${productId}`;
    return this.httpClient.put<Catalogo>(url2, httpOptions).pipe(
      tap(_ => this.log(`REMOVE PRODUTO`)),
      catchError(this.handleError<Catalogo>(`Erro no remove produto do catálogo`))
    );
  }

  private log(message: string) {
    console.log(`Catalog service: ${message}`);
  };

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
