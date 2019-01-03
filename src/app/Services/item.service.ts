import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Item } from '../model/Item';
import { criarItemFilhoDTO } from '../DTOS/criarItemFilhoDTO';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private itemUrl = 'http://localhost:8080';  // URL to web api

  constructor(private http: HttpClient,) { }

  getItens (): Observable<Item[]> {
    return this.http.get<Item[]>(this.itemUrl)
    .pipe(
      tap(_ => this.log('fetched heroes')),
      catchError(this.handleError('get itens', []))
    );
}

deleteItem(Item: Item | string): Observable<any> {
  const id = typeof Item === 'string' ? Item : Item.id;
  const urlDel = `${this.itemUrl}/${id}`;
  return this.http.delete<any>(urlDel, httpOptions).pipe(
    tap(_ => alert(`Deleted item`)),
    catchError(this.handleError<any>('delete item', []))
  );
}

getItem( id: string ): Observable<Item>{
  const url = `${this.itemUrl}/${id}`;
  return this.http.get<Item>(url).pipe(
    tap(_ => this.log(`fetched item id=${id}`)),
    catchError(this.handleError<Item>(`get item id=${id}`))
  );
}

createChild(filho: criarItemFilhoDTO, id: string): Observable<Item>{
  const urlAC = `${this.itemUrl}/${id}/adicionarparte`;
  this.log(`${filho.ProductId}`);
  return this.http.post<Item>(urlAC,filho,httpOptions).pipe(
    tap((iFilho: Item) => alert(`added item to parent, ${iFilho.nome}`)),
    catchError(this.handleError<any>('ADD CHILD'))
  );
}

createParent(filho: criarItemFilhoDTO): Observable<Item>{
  const urlAC = `${this.itemUrl}/`;

  return this.http.post<Item>(urlAC,filho,httpOptions).pipe(
    tap((iFilho: Item) => alert(`added item ${iFilho.nome}`)),
    catchError(this.handleError<any>('ADD PARENT ITEM'))
  );
}
 
editParentItem(filho: criarItemFilhoDTO,id:string): Observable<Item>{
  const url = `${this.itemUrl}/${id}`;
  return this.http.put(url,filho,httpOptions).pipe(
    tap(_ => alert(`ITEM ALTERADO`)),
    catchError(this.handleError<any>('EDIT ITEM'))
  );

}

editChildItem(filho: criarItemFilhoDTO,id:string,idPai:string): Observable<Item>{
  const url = `${this.itemUrl}/${idPai}/edit/${id}`;
  return this.http.put(url,filho,httpOptions).pipe(
    tap(_ => alert(`ITEM ALTERADO`)),
    catchError(this.handleError<any>('EDIT ITEM'))
)
}

removeItem(item: Item, id: string): Observable<Item>{
  const url = `${this.itemUrl}/${id}/removerparte/${item.id}`;
  
   return this.http.get<Item>(url).pipe(
     
    tap(_ => alert(`removed item ${item.nome} from is parent`)),
    catchError(this.handleError<any>(`REMOVE ITEM`))
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
