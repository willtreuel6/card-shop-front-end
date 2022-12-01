import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Email } from '../models/email';

@Injectable({
  providedIn: 'root'
})
export class EmailService {


  private baseurl : "http://localhost:8081/api/email";

  constructor(private http : HttpClient) { }

  getEmailList(): Observable<object>{
    return this.http.get(`${this.baseurl}`);
  }

  addEmail(email : Email): Observable<object>{
    return this.http.post(`${this.baseurl}`, email)
  }

  deleteEmail(id : number): Observable<any>{
    return this.http.delete(`${this.baseurl}/${id}`, {responseType : 'text'})
  }
}
