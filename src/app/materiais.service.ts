import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError,map, tap } from 'rxjs/operators';

import { Material } from './model/Material';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class MateriaisService {

  private urlGetMateriais = 'https://sic3df.azurewebsites.net/api/Material';
  private urlPostMateriais ='https://sic3df.azurewebsites.net/api/Material';
  //private urlDelete = 

  constructor(
    private httpClient: HttpClient
  ) { }


  private log(message: string) {
    console.log(`Material service: ${message}`);
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

  getMateriais(): Observable<Material[]>{
    return this.httpClient.get<Material[]>(this.urlGetMateriais).pipe(
      tap(_ => this.log('CARREGA MATERIAIS')),
      catchError(this.handleError('get materiais',[]))
    )
  };

  createMaterial(material: Material): Observable<Material>{
    return this.httpClient.post<Material>(this.urlPostMateriais,material,httpOptions).pipe(
      tap((material: Material)=> this.log('ADICIONADA')),
      catchError(this.handleError<Material>('ADICIONAR Material'))
    );
  }

  deleteMaterial(material : Material): Observable<Material>{
    const url2 = `${this.urlGetMateriais}/${material.materialId}`;
    return this.httpClient.delete<Material>(url2,httpOptions).pipe(
      tap(_ => this.log(`Material delete`)),
      catchError(this.handleError<Material>('ERRO DELETE MATERIAL'))
    );
  }

  /*editMaterial(material :Material): Observable<Material>{
    const url2 = `${this.urlGetMateriais}/${material.materialId}`;
    return this.httpClient.put<Material>(url2,);
  }*/
}
