import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Serializer} from './serializer';
import {Resource} from '../models/Resource';
import {QueryOptions} from './QueryOptions';
import 'rxjs-compat/add/operator/map';
import {of} from 'rxjs/internal/observable/of';
import {tap} from 'rxjs/internal/operators/tap';
import {catchError} from 'rxjs/operators';

export class ResourceService<T extends Resource> {
  constructor(
    private httpClient: HttpClient,
    private url: string,
    private endpoint: string,
    private serializer: Serializer) {}

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  public create(item: T): Observable<T> {
    return this.httpClient
      .post<T>('${this.url}/${this.endpoint}', this.serializer.toJson(item))
      .pipe(
        tap(data => this.serializer.fromJson(data),
        catchError(this.handleError('getClients', []))
      ));
  }

  public update(item: T): Observable<T> {
    return this.httpClient
      .put<T>('${this.url}/${this.endpoint}/${item.id}',
        this.serializer.toJson(item))
      .map(data => this.serializer.fromJson(data) as T);
  }

  public read(id: number): Observable<T> {
    return this.httpClient
      .get('${this.url}/${this.endpoint}/${id}')
      .map((data: any) => this.serializer.fromJson(data) as T);
  }

  public list(queryOptions: QueryOptions): Observable<T[]> {
    return this.httpClient
      .get('${this.url}/${this.endpoint}?${queryOptions.toQueryString()}')
      .map((data: any) => this.convertData(data.items));
  }

  public delete(id: number) {
    return this.httpClient
      .delete('${this.url}/${this.endpoint}/${id}');
  }

  private convertData(data: any): T[] {
    return data.map(item => this.serializer.fromJson(item));
  }
}
