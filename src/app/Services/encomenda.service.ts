import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError,map, tap } from 'rxjs/operators';
import { Encomenda } from '../model/Encomenda';
import { Item } from '../model/Item';
import { addItemEncomendaDTO } from '../DTOS/addItemEncomendaDTO';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EncomendaService {
  
  private urlSic = 'https://sic-encomendas2018.herokuapp.com';
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
      tap((encomenda: Encomenda) => this.log(`added Enc w/ id`)),
      catchError(this.handleError<Encomenda>('addENC'))
    );
  }

  encomenda_submit(id : string): Observable<Encomenda>
  {
     const url = `${this.urlSic}/encomendas/${id}/submit`;
     return this.httpClient.get<Encomenda>(url).pipe(
       tap(_ => this.log(`submit`)),
       catchError(this.handleError<Encomenda>(``))
     );
  }
  getEncomenda( id: string ): Observable<Encomenda>{
    const url = `${this.urlSic}/encomendas/${id}`;
    return this.httpClient.get<Encomenda>(url).pipe(
      tap(_ => this.log(`fetched item id`)),
      catchError(this.handleError<Encomenda>(`get item id`))
    );
  }

  addItem(id:string, item: addItemEncomendaDTO ): Observable<Encomenda>{
    
    const url2 = `${this.urlSic}/encomendas/${id}/addItem`;
    
    return this.httpClient.put<Encomenda>(url2,item,httpOptions).pipe(
      catchError(this.handleError<Encomenda>(`add item`))
    );
  }
  
  removeItem(id:string, item: addItemEncomendaDTO ): Observable<Encomenda>{
    
    const url2 = `${this.urlSic}/encomendas/${id}/removeItem`;
    
    return this.httpClient.put<Encomenda>(url2,item,httpOptions).pipe(
      catchError(this.handleError<Encomenda>(`removido item`))
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
      this.log(`${operation} failed`);
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  //https://encomendassic.herokuapp.com/encomendas/
}
