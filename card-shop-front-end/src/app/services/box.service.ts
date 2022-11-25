import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Box } from '../models/box';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BoxService {
  
  
  private baseUrl = "http://localhost:8081/api/box";

  constructor(private http: HttpClient) { }

  getBoxList(): Observable<object> {
    return this.http.get(`${this.baseUrl}`);
    
  }

  getBoxById(id : number): Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  deleteBox(id : number) : Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType : 'text'})
  }

  createBox(box : Object): Observable<Object>{
    return this.http.post(`${this.baseUrl}`, box)
  }

  updateBox( box : Object) : Observable<Object>{
    return this.http.post(`${this.baseUrl}`, box)
  }
}
