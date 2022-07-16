import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _HttpClilent:HttpClient) {}


  getData():Observable<any> {
    return this._HttpClilent.get(`https://test-api.storexweb.com/api/category`);
  };
}
