import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable , BehaviorSubject } from 'rxjs';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';






@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiResponse:any ='';

  constructor(private _HttpClient:HttpClient, private _Router:Router) {

    if(localStorage.getItem('currentUser')) {
      this.saveCurrentUserData();
    }

  }

  currentUserData:any = new BehaviorSubject(null);

  register(formData:object):Observable<any>{
    return this._HttpClient.post('https://test-api.storexweb.com/api/register', formData);
  }

  login(formData:object):Observable<any>{
    return this._HttpClient.post('https://test-api.storexweb.com/api/login', formData);
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserData.next(null);
    this._Router.navigate(['/login']);
  }

  saveCurrentUserData() {
    let encodedToken:any = localStorage.getItem('currentUser');
    let decodedToken = jwtDecode(encodedToken);
    this.currentUserData.next(decodedToken);
  }
}
