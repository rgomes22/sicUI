import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError,map, tap } from 'rxjs/operators';

import { Produto } from '../model/Produto';
import { criarProdutoDTO } from '../DTOS/criarProdutoDTO';
import { produtoPutDTO } from '../DTOS/produtoPutDTO';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})

export class ProdutosService {

  //private urlSicCatalogo ='' ; 
  private urlGetProdutos = 'https://sic3df.azurewebsites.net/api/Product';
  private urlPostProduto = 'https://sic3df.azurewebsites.net/api/Product';
  private urlPutProduto = 'https://sic3df.azurewebsites.net/api/Product';
  constructor(private httpClient: HttpClient) { }

  getProdutos(): Observable<Produto[]>{
    return this.httpClient.get<Produto[]>(this.urlGetProdutos).pipe(
      tap(_ => this.log('CARREGA PRODUTO')),
      catchError(this.handleError('get Produtos',[]))
    )

  };

  putProduct(id:string, produto: produtoPutDTO): Observable<Produto>{
    const url2 = `${this.urlPutProduto}/${id}`;
    alert("put url "+url2);
    return this.httpClient.put<Produto>(url2,produto,httpOptions).pipe(
      tap(_ => this.log(`put id`)),
      catchError(this.handleError<Produto>(`put id`))
    );
  }

  getProduto( id: number ): Observable<Produto>{
    const url = `${this.urlGetProdutos}/${id}`;
    return this.httpClient.get<Produto>(url).pipe(
      tap(_ => this.log(`fetched PROD id`)),
      catchError(this.handleError<Produto>(`get PROD id`))
    );
  }
  //Post do produto 
  //it calls HttpClient.post()
  //it expects the server to generates an id for the new product, which it returns 
  //in the Observable<Produto> to the caller.
  postProduto(produto:criarProdutoDTO): Observable<Produto>{
    return this.httpClient.post<Produto>(this.urlPostProduto,produto,httpOptions).pipe(
      tap((produto:Produto)=> this.log('Produto adicionado')),
      catchError(this.handleError<Produto>('Post produto'))
    );
  }

  //Delete
  /*
  it calls HttpClient.delete.
  the URL is the PRODUCT resource URL plus the id of the product to delete
  don't send data as you did with put and post.
  still send the httpOptions. 
  */
  delete(produto:Produto | number ): Observable<Produto>{
    const id = typeof produto === 'number' ? produto : produto.productId;
    const url = `${this.urlGetProdutos}/${id}`;
    return this.httpClient.delete<Produto>(url, httpOptions).pipe(
      tap(_=> this.log(`Delete do Produto id`)),
      catchError(this.handleError<Produto>('DELETE PRODUTO'))
    );
  }


  private log(message: string) {
    console.log(`Product service: ${message}`);
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
 
}
