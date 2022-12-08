import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class AdminControlsService {

  private baseUrl = 'http://localhost:8081/api/contact'

  constructor(private http : HttpClient) { }

  getContactById(id : any){
    return this.http.get<Contact>(`${this.baseUrl}/${id}`);
  }

  getContact(): Observable<object>{
    return this.http.get(`${this.baseUrl}`);
  }

  updateContact(contact : Object): Observable<object>{
    return this.http.put(`${this.baseUrl}`, contact)
  }
}
