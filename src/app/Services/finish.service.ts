import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Finish } from '../model/Finish';
import { finishPutDTO } from '../DTOS/finishPutDTO';
import { criarFinishDTO } from '../DTOS/criarFinishDTO';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class FinishService {

  private url = 'https://3db-sic-webapi.azurewebsites.net/api/Finish';
  constructor(
    private http:HttpClient) { }
    
    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
    
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
    
        // TODO: better job of transforming error for user consumption
        this.log(`${operation} failed: ${error.message}`);
        alert(`${operation}: Nao e possivel realizar a operacao`);
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }
    
    /** Log a HeroService message with the MessageService */
    private log(message: string) {
      console.log(`FinishService: ${message}`);
    
    }

    
    getAcabamentos(): Observable<Finish[]>{
      return this.http.get<Finish[]>(this.url).pipe(
        tap(_ => this.log('Get Finish')),
        catchError(this.handleError('Get Finish',[]))
      )
  
    }

    putFinish(id:number, finish: finishPutDTO): Observable<Finish>{
      const url2 = `${this.url}/${id}`;
    
      return this.http.put<Finish>(url2,finish,httpOptions).pipe(
        catchError(this.handleError<Finish>(`put id`))
      );
    }

    delete(finish:Finish | number ): Observable<Finish>{
      const id = typeof finish === 'number' ? finish : finish.finishId;
      const url = `${this.url}/${id}`;
      return this.http.delete<Finish>(url, httpOptions).pipe(
        catchError(this.handleError<Finish>('DELETE FINISH'))
      );
    }

    

    postFinish(finish:criarFinishDTO): Observable<Finish>{
      return this.http.post<Finish>(this.url,finish,httpOptions).pipe(
        catchError(this.handleError<Finish>('Post acabamento'))
      );
    }
}
