import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../models/card';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private baseUrl = "http://localhost:8081/api/card";

  constructor(private http: HttpClient) { }

  getCardList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getCardById(id : number): Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  
}
