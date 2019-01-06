import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { MaterialFinish } from '../model/MaterialFinish';
import { Price } from '../model/Price';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class MaterialFinishService {
  private mfUrl = 'https://3db-sic-webapi.azurewebsites.net/api/materialfinish';
  constructor(private http: HttpClient,) { }

  getMaterialFinishes (): Observable<MaterialFinish[]>{
    return this.http.get<MaterialFinish[]>(this.mfUrl).pipe(
      tap(_ => this.log('fetched mfs')),
      catchError(this.handleError('get material finishes',[]))
    )

  }

  createMaterialFinish(idFinish : string, idMaterial : string): Observable<MaterialFinish>{
    var m = {
      MaterialId : idMaterial,
      FinishId : idFinish,
    }
    return this.http.post<MaterialFinish>(this.mfUrl,m,httpOptions).pipe(
      tap(p => this.log('created material finish')),
      catchError(this.handleError<MaterialFinish>('Creation Error'))
    );
  }

addPrice(idM: string, idF:string,price : Price): Observable<Price>{
  const url2 = `${this.mfUrl}/${idM}/addPrice/${idF}`;
  console.log(price);
  console.log(url2);
  return this.http.post<Price>(url2,price,httpOptions).pipe(
    tap(p => this.log('added Price')),
    catchError(this.handleError<Price>('Price adition error'))
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
  console.log(`MaterialFinish Service: ${message}`);

}

}
