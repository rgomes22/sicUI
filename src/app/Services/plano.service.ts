import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Plano } from '../model/Plano';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PlanoService {
  private url = 'https://sic-encomendas2018.herokuapp.com/plano/plano';

  constructor(private http: HttpClient) { }

  getPlanos (): Observable<Plano[]> {
    return this.http.get<Plano[]>(this.url)
    .pipe(
      tap(_ => this.log('fetched Planos')),
      catchError(this.handleError('get Planos', []))
    );
  }

  getPlano( id: string ): Observable<Plano>{
    const url = `${this.url}/${id}`;
    return this.http.get<Plano>(url).pipe(
      tap(_ => this.log(`fetched plano id=${id}`)),
      catchError(this.handleError<Plano>(`get plano id=${id}`))
    );
  }

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
    console.log(`ItemService: ${message}`);
  }
}
