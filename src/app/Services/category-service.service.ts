import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Category } from '../model/Category';
import { categoryPutDTO } from '../DTOS/categoryPutDTO';
import { criarCategoriaDTO } from '../DTOS/criarCategoriaDTO';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {
  private url = 'https://3db-sic-webapi.azurewebsites.net/api/Category';
  constructor(
    private http:HttpClient
  ) { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
      alert(` ${operation}: Lamentamos mas nao e possivel realizar esta operacao`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  
  /** Log a HeroService message with the MessageService */
  private log(message: string) {

    console.log(`CategoryService: ${message}`);
  
  }

  getCategories (): Observable<Category[]>{
    return this.http.get<Category[]>(this.url).pipe(
      tap(_ => this.log('Get Categorias')),
      catchError(this.handleError('GET CATEGORIES',[]))
    )

  }

  getCategoryById(categoryId:number | string): Observable<Category>{
    const url2 = `${this.url}/${categoryId}`;
    return this.http.get<Category>(url2).pipe(
      tap(_ => this.log('Get Category by Id')),
      catchError(this.handleError<any>('Get Category by Id'))
    )
  }

  delete(category:Category | number ): Observable<Category>{
    const id = typeof category === 'number' ? category : category.categoryId;
    const url = `${this.url}/${id}`;
    return this.http.delete<Category>(url, httpOptions).pipe(
      catchError(this.handleError<Category>('DELETE CATEGORIA'))
    );
  }
  putCategoria(id:number, category: categoryPutDTO): Observable<Category>{
    const url2 = `${this.url}/${id}`;
   // alert("put url "+url2);
    return this.http.put<Category>(url2,category,httpOptions).pipe(
      tap(_ => this.log(`put id`)),
      catchError(this.handleError<Category>(`put id`))
    );
  }
  postCategoria(categoria:criarCategoriaDTO): Observable<Category>{
    return this.http.post<Category>(this.url,categoria,httpOptions).pipe(
      tap((categoria:Category)=> this.log('Categoria adicionada')),
      catchError(this.handleError<Category>('Post categoty'))
    );
  }
}
