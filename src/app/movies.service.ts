import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})

export class MoviesService {
  constructor(private _HttpClient:HttpClient , private _AuthService:AuthService) {}

  moviesResponse:any = [];
  movieDetails:any;

  headers = new HttpHeaders({
    'Content-Type':'application/json; charset=utf-8',
    'Authorization':'Bearer '+ localStorage.getItem('currentUser')
  });

  requestOptions = { headers: this.headers };

  getMovies():Observable<any> {
    this.moviesResponse = this._HttpClient.get(`https://test-api.storexweb.com/api/movies`, this.requestOptions);
    return this.moviesResponse;
  };

  getMovieDetails(id:number):Observable<any> {
    this.movieDetails = this._HttpClient.get(`https://test-api.storexweb.com/api/movies/${id}`, this.requestOptions);
    return this.movieDetails;
  };

  createMovie(formdata:object):Observable<any> {
    return this._HttpClient.post('https://test-api.storexweb.com/api/movies', formdata , this.requestOptions);
  };

  updateMovie() {

  };

  






}
