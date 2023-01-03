import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { About } from '../models/about';
import { Contact } from '../models/contact';
import { Faq } from '../models/faq';

@Injectable({
  providedIn: 'root'
})
export class AdminControlsService {

  private contactUrl = 'http://cardshopapp-env.eba-2ct6w5pc.us-east-1.elasticbeanstalk.com/api/contact';

  private aboutUrl = 'http://cardshopapp-env.eba-2ct6w5pc.us-east-1.elasticbeanstalk.com/api/about';

  private homeUrl = 'http://cardshopapp-env.eba-2ct6w5pc.us-east-1.elasticbeanstalk.com/api/home';

  private footerUrl = 'http://cardshopapp-env.eba-2ct6w5pc.us-east-1.elasticbeanstalk.com/api/footer';

  private faqUrl = 'http://cardshopapp-env.eba-2ct6w5pc.us-east-1.elasticbeanstalk.com/api/faq';

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

  getHome(): Observable<object>{
    return this.http.get(`${this.homeUrl}`);
  }

  updateHome(home : object): Observable<object>{
    return this.http.put(`${this.homeUrl}`, home);
  }

  getFooter() : Observable<object>{
    return this.http.get(`${this.footerUrl}`);
  }

  updateFooter(footer : object) : Observable<object>{
    return this.http.put(`${this.footerUrl}`, footer);
  }

  getFaq() : Observable<object>{
    return this.http.get(`${this.faqUrl}`);
  }

  updateFaq(faq : Faq){
    return this.http.put(`${this.faqUrl}`, faq);
  }
}
