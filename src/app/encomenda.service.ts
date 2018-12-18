import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError,map, tap } from 'rxjs/operators';
import { Encomenda } from './model/Encomenda';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EncomendaService {
  
  private urlSic = 'https://encomendassic.herokuapp.com';
  constructor(private httpClient: HttpClient) { }
  
  getEncomendas(): Observable<Encomenda[]> {
    return this.httpClient.get<Encomenda[]>(`${this.urlSic}/encomendas/`).pipe(
      tap(_ => this.log('CARREGADAS')),
      catchError(this.handleError('BUSCAR CENAS',[]))
      )
  };

  deleteEncomenda(encomenda: Encomenda | string): Observable<Encomenda> {
      const id = typeof encomenda === 'string' ? encomenda : encomenda.id;
      const urlDel = `${this.urlSic}/encomendas/${id}`;
      return this.httpClient.delete<Encomenda>(urlDel, httpOptions).pipe(
        tap(_ => this.log(`deleted enc id=${id}`)),
        catchError(this.handleError<Encomenda>('delete encomenda'))
      );
  }

  createEncomenda(encomenda : Encomenda): Observable<Encomenda> {
    return this.httpClient.post<Encomenda>(`${this.urlSic}/encomendas/`,encomenda,httpOptions).pipe(
      tap((encomenda: Encomenda) => this.log(`added Enc w/ id=${encomenda.id}`)),
      catchError(this.handleError<Encomenda>('addENC'))
    );
  }

  private log(message: string) {
    console.log(`HeroService: ${message}`);
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
  //https://encomendassic.herokuapp.com/encomendas/
}
