import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl : string = "http://localhost:8081/api/admin";

  isAuthenticate : boolean = false;

  admins : any = {};

  constructor(private http : HttpClient) { }

  getAdminList(): Observable<object> {
    return this.http.get(`${this.baseUrl}`);
    
  }

  getAdminById(id : number): Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  deleteAdmin(id : number) : Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType : 'text'})
  }

  createAdmin(box : Object): Observable<Object>{
    return this.http.post(`${this.baseUrl}`, box)
  }

  updateAdmin( box : Object) : Observable<Object>{
    return this.http.put(`${this.baseUrl}`, box)
  }


  login(email : string, password : string, objs : any): boolean{
    console.log(this.admins)
    
    for(let i in objs){
      if(objs[i]["email"] == email && objs[i]["pWord"] == password){
        this.isAuthenticate = true;
        return true;
      }
    }
    return false;
  }

  


}
