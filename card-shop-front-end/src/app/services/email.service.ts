import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Email } from '../models/email';

@Injectable({
  providedIn: 'root'
})
export class EmailService {


  private baseUrl = "http://localhost:8081/api/email/";

  constructor(private http : HttpClient) { }

  getEmailList(): Observable<object>{
    return this.http.get(`${this.baseUrl}`);
  }

  addEmail(email : Email): Observable<object>{
    return this.http.post(`${this.baseUrl}`, email)
  }

  deleteEmail(id : number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`, {responseType : 'text'})
  }

  showPath(){
    return `${this.baseUrl}`
  }
}
