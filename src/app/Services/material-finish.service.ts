import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { MaterialFinish } from '../model/MaterialFinish';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class MaterialFinishService {
  private mfUrl = 'https://sic3df.azurewebsites.net/api/materialfinish';
  constructor(private http: HttpClient,) { }

  getMaterialFinishes (): Observable<MaterialFinish[]>{
    return this.http.get<MaterialFinish[]>(this.mfUrl).pipe(
      tap(_ => this.log('fetched mfs')),
      catchError(this.handleError('get material finishes',[]))
    )

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
