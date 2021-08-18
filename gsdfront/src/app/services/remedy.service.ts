import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helperService';

@Injectable({
  providedIn: 'root'
})
export class RemedyService {

  constructor(private _http: HttpClient) { }

  public remedy()
  {
    return this._http.get(`${baseUrl}/remedy/`)
  }

  public addRemedy(remedy:any)
  {
    return this._http.post(`${baseUrl}/remedy/`,remedy);
  }
  public deleteRemedy(rid)
  {
    return this._http.delete(`${baseUrl}/remedy/${rid}`);
  }

  public remedyUser(empId)
  {
    return this._http.get(`${baseUrl}/remedy/`,empId);
  }

  public getRemedy(rid)
  {
    return this._http.get(`${baseUrl}/remedy/${rid}/update`);
  }
  public updateRemedy(remedy:any)
  {
    return this._http.put(`${baseUrl}/remedy/`,remedy);
  }
}
