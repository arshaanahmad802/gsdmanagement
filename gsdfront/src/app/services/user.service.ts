import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helperService';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
    
   }

  public addUser(user:any)
  {
    console.log(baseUrl);
    return this.http.post('http://localhost:8080/user/', user);

  }
}
