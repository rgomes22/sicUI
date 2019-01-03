import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Colecao } from '../model/Colecao';
import { colecaoPutDTO } from '../DTOS/colecaoPutDTO';
import { criarColecaoDTO } from '../DTOS/criarColecaoDTO';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})

export class ColecoesService {

  //private urlSicCatalogo ='' ; 
  private urlGetColecoes = 'https://3db-sic-webapi.azurewebsites.net/api/Collection';
  private urlPostColecao = 'https://3db-sic-webapi.azurewebsites.net/api/Collection';
  private urlPutColecao = 'https://3db-sic-webapi.azurewebsites.net/api/Collection';
  constructor(private httpClient: HttpClient) { }

  getColecoes(): Observable<Colecao[]> {
    return this.httpClient.get<Colecao[]>(this.urlGetColecoes).pipe(
      tap(_ => this.log('CARREGA COLECAO')),
      catchError(this.handleError('get Colecoes', []))
    )

  };

  putColecao(id: string, colecao: colecaoPutDTO): Observable<Colecao> {
    const url2 = `${this.urlPutColecao}/${id}`;
    alert("put url " + url2);
    return this.httpClient.put<Colecao>(url2, colecao, httpOptions).pipe(
      tap(_ => this.log(`put id`)),
      catchError(this.handleError<Colecao>(`put id`))
    );
  }

  getColecao(id: number): Observable<Colecao> {
    const url = `${this.urlGetColecoes}/${id}`;
    return this.httpClient.get<Colecao>(url).pipe(
      tap(_ => this.log(`fetched COL id`)),
      catchError(this.handleError<Colecao>(`get COL id`))
    );
  }
  //Post da colecão 
  //it calls HttpClient.post()
  //it expects the server to generates an id for the new collection, which it returns 
  //in the Observable<Colecao> to the caller.
  postColecao(colecao:criarColecaoDTO): Observable<Colecao>{
      return this.httpClient.post<Colecao>(this.urlPostColecao,colecao,httpOptions).pipe(
      tap((colecao:Colecao)=> this.log('Coleção adicionada')),
      catchError(this.handleError<Colecao>('Post colecao'))
      );
  }

  //Delete
  /*
  it calls HttpClient.delete.
  the URL is the PRODUCT resource URL plus the id of the collection to delete
  don't send data as you did with put and post.
  still send the httpOptions. 
  */
  delete(colecao: Colecao | number): Observable<Colecao> {
    const id = typeof colecao === 'number' ? colecao : colecao.colecaoId;
    const url = `${this.urlGetColecoes}/${id}`;
    return this.httpClient.delete<Colecao>(url, httpOptions).pipe(
      tap(_ => this.log(`Delete da Colecao id`)),
      catchError(this.handleError<Colecao>('DELETE COLECAO'))
    );
  }


  private log(message: string) {
    console.log(`Collection service: ${message}`);
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
