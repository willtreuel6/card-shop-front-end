import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Box } from '../models/box';
import { Card } from '../models/card';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private baseUrl = "http://localhost:8081/api/card";

  constructor(private http: HttpClient) { }

  getCardList(): Observable<object> {
    return this.http.get(`${this.baseUrl}`);
  }

  getCardById(id : number): Observable<object>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  deleteCard(id : number) : Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType : 'text'});
  }

  createCard(card : Card) : Observable<object>{
    return this.http.post(`${this.baseUrl}`, card);
  }

  updateCard(card : Card) : Observable<object>{
    return this.http.put(`${this.baseUrl}`, card);
  }

  
}
