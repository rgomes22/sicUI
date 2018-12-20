import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Category } from '../../model/Category';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {
  private url = 'https://sic3df.azurewebsites.net/api/Category';
  constructor(
    private http:HttpClient
  ) { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
      alert(`failed: ${error.message}`);
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

  getCategoryById(categoryId:number): Observable<Category>{
    const url2 = `${this.url}/${categoryId}`;
    return this.http.get<Category>(url2).pipe(
      tap(_ => this.log('Get Category by Id')),
      catchError(this.handleError<any>('Get Category by Id'))
    )
  }
}
