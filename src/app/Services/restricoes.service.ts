import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Restricao } from '../model/Restricao';
import { RestricaoDTO } from '../DTOS/restricaoDTO';
import { restricaoPutDTO } from '../DTOS/restricaoPutDTO';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RestricoesService {
  private urlRes = 'https://3db-sic-webapi.azurewebsites.net/api/Restriction';
  
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
    console.log(`RestrictionService: ${message}`);
  
  }

  //get
  getRestriçoes(): Observable<Restricao[]>{
    return this.http.get<Restricao[]>(this.urlRes).pipe(
      tap(_ => this.log('CARREGA RESTRIÇOES')),
      catchError(this.handleError('get restriçoes',[]))
    )
  }

  //post
  createRestricao(restricao: Restricao): Observable<Restricao>{

    return this.http.post<Restricao>(this.urlRes,restricao,httpOptions).pipe(
      tap((restricao: Restricao)=> alert(`added item ${restricao.restrictionId}`)),
      catchError(this.handleError<Restricao>('ADICIONAR Restriçao'))
    );
  }

  //delete

  delete(restricao:Restricao | number ): Observable<Restricao>{
    const id = typeof restricao === 'number' ? restricao : restricao.restrictionId;
    const url = `${this.urlRes}/${id}`;
    return this.http.delete<Restricao>(url, httpOptions).pipe(
      tap(_=> this.log(`Delete da restricao com id=${id}`)),
      catchError(this.handleError<Restricao>('DELETE Restricao'))
    );
  }

  //put
  putRestricao(id:number,restricaoPutDTO:restricaoPutDTO): Observable<Restricao>{
    const urlPut = `${this.urlRes}/${id}`;
    return this.http.put<Restricao>(urlPut,restricaoPutDTO,httpOptions).pipe(
      tap(_=> this.log(`put id=${id}`)),
      catchError(this.handleError<Restricao>(`put id=${id}`))
    );
  }


}
