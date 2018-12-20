import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { DiscreetDimension } from '../../model/DiscreetDimension';
import { ContinuousDimension } from '../../model/ContinuousDimension';
import { CDPutDTO } from '../../DTOS/CDPutDTO';
import { DDPutDTO } from '../../DTOS/DDPutDTO';
import { DiscreetDimensionPostDTO } from '../../DTOS/DiscreetDimensionPostDTO';
import { ContinuousDimensionPostDTO } from '../../DTOS/ContinuousDimensionPostDTO';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DimensionsService {
  urlContinuousDimensions = 'https://sic3df.azurewebsites.net/api/ContinuousDimension';
  urlDiscreetDimensions = 'https://sic3df.azurewebsites.net/api/DiscreetDimension';
  constructor(
    private httpClient: HttpClient
  ) { }

  public getDiscDim(): Observable<DiscreetDimension[]> {
    return this.httpClient.get<DiscreetDimension[]>(`${this.urlDiscreetDimensions}`).pipe(
      tap(_ => this.log('Discreets Loaded')),
      catchError(this.handleError('error',[]))
      )
  };

  public getContDim(): Observable<ContinuousDimension[]> {
    return this.httpClient.get<ContinuousDimension[]>(`${this.urlContinuousDimensions}`).pipe(
      tap(_ => this.log('Continuous Loaded')),
      catchError(this.handleError('error',[]))
      )
  };

  public deleteContDim(id:number): Observable<ContinuousDimension[]> {
    const url2 = `${this.urlContinuousDimensions}/${id}`;
    return this.httpClient.delete<ContinuousDimension[]>(url2).pipe(
      tap(_ => this.log('Continuous deleted')),
      catchError(this.handleError('error',[]))
      )
  };

  public deleteDiscDim(id:number): Observable<DiscreetDimension[]> {
    const url2 = `${this.urlDiscreetDimensions}/${id}`;
    return this.httpClient.delete<DiscreetDimension[]>(url2).pipe(
      tap(_ => this.log('Discreets delete')),
      catchError(this.handleError('error',[]))
      )
  };

  public putContDim(cont : CDPutDTO, id:number): Observable<ContinuousDimension> {
    const url2 = `${this.urlContinuousDimensions}/${id}`;
    return this.httpClient.put<ContinuousDimension>(url2,cont,httpOptions).pipe(
      tap(_ => this.log('Continuous Put Correct')),
      catchError(this.handleError<any>('error'))
      )
  };

  public postDiscDim(disc : DiscreetDimensionPostDTO): Observable<DiscreetDimension> {
    const url2 = `${this.urlDiscreetDimensions}`;
    return this.httpClient.post<DiscreetDimension>(url2,disc,httpOptions).pipe(
      tap(_ => this.log('Discreet Post Correct')),
      catchError(this.handleError<any>('error'))
      )
  };

  public postContDim(cont : ContinuousDimensionPostDTO): Observable<ContinuousDimension> {
    const url2 = `${this.urlContinuousDimensions}`;
    return this.httpClient.post<ContinuousDimension>(url2,cont,httpOptions).pipe(
      tap(_ => this.log('Continuous Post Correct')),
      catchError(this.handleError<any>('error'))
      )
  };

  public putDiscDim(disc : DDPutDTO, id:number): Observable<DiscreetDimension> {
    const url2 = `${this.urlDiscreetDimensions}/${id}`;
    return this.httpClient.put<DiscreetDimension>(url2,disc,httpOptions).pipe(
      tap(_ => this.log('Discreet Put Correct')),
      catchError(this.handleError<any>('error'))
      )
  };

  public getProductContDim(id:string): Observable<ContinuousDimension[]> {
    const url2 = `${this.urlContinuousDimensions}/product/${id}`
    return this.httpClient.get<ContinuousDimension[]>(url2).pipe(
      tap(_ => this.log('Continuous Product Loaded')),
      catchError(this.handleError('error',[]))
      )
  };

  public getProductDiscDim(id:string): Observable<DiscreetDimension[]> {
    const url2 = `${this.urlDiscreetDimensions}/product/${id}`
    return this.httpClient.get<DiscreetDimension[]>(url2).pipe(
      tap(_ => this.log('Discreets Product Loaded')),
      catchError(this.handleError('error',[]))
      )
  };




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
}
