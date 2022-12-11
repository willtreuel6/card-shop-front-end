import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { About } from '../models/about';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class AdminControlsService {

  private contactUrl = 'http://localhost:8081/api/contact';

  private aboutUrl = 'http://localhost:8081/api/about';

  constructor(private http : HttpClient) { }

  getContactById(id : any){
    return this.http.get<Contact>(`${this.contactUrl}/${id}`);
  }

  getContact(): Observable<object>{
    return this.http.get(`${this.contactUrl}`);
  }

  updateContact(contact : Object): Observable<object>{
    return this.http.put(`${this.contactUrl}`, contact)
  }

  getAboutById(id : any){
    return this.http.get<About>(`${this.aboutUrl}/${id}`);
  }

  getAbout(): Observable<object>{
    return this.http.get(`${this.aboutUrl}`);
  }

  updateAbout(about : Object): Observable<object>{
    return this.http.put(`${this.aboutUrl}`, about);
  }
}
