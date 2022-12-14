import { Component, OnInit } from '@angular/core';
import { ConfirmationService, Footer, MessageService } from 'primeng/api';
import { About } from 'src/app/models/about';
import { Contact } from 'src/app/models/contact';
import { Home } from 'src/app/models/home';
import { AdminControlsService } from 'src/app/services/admin-controls.service';

@Component({
  selector: 'app-admin-controls',
  templateUrl: './admin-controls.component.html',
  styleUrls: ['./admin-controls.component.css'],
  providers: [ConfirmationService, MessageService]
})
export class AdminControlsComponent implements OnInit {

  contactInfoSet : any = {};

  aboutInfoSet : any = {};

  homeInfoSet : any = {};

  footerInfoSet : any = {};

  faqInfoSet : any = {};

  contactInfo : Contact;

  aboutInfo : About;

  homeInfo : Home;

  footerInfo : any;

  faqInfo : any;

  contactInfoDialog : boolean = false;

  aboutInfoDialog : boolean = false;

  homeInfoDialog : boolean = false;

  footerInfoDialog : boolean = false;

  faqInfoDialog : boolean = false;

  contactHoursDialog : boolean = false;

  constructor(private adminControlsService : AdminControlsService, private confirmationService : ConfirmationService) { }

  ngOnInit(): void {
    this.reloadData();

  }

  reloadData(){
    this.adminControlsService.getContact()
    .subscribe(res => {
      console.log("Contact : " + res)
      this.contactInfoSet = res;
    });

    this.adminControlsService.getAbout()
    .subscribe(data => {
      console.log("About " + data)
      this.aboutInfoSet = data;
    })

    this.adminControlsService.getHome()
    .subscribe(homeD => {
      console.log("Home : " + homeD)
      this.homeInfoSet = homeD;
    })

    this.adminControlsService.getFooter()
    .subscribe(footerD => {
      console.log(footerD);
      this.footerInfoSet = footerD;
    })

    this.adminControlsService.getFaq()
    .subscribe(faqD => {
      console.log(faqD)
      this.faqInfoSet = faqD;
    })
  }


  editContact(contactInfo : object){
    this.contactInfoDialog = true;
    this.contactInfo = {...contactInfo};
    console.log(contactInfo);
  }

  editContactHours(contactInfo : object){
    this.contactHoursDialog = true;
    this.contactInfo = {...contactInfo};
    console.log(contactInfo);
  }

  editAbout(aboutInfo : object){
    this.aboutInfoDialog = true;
    this.aboutInfo = {...aboutInfo};
    console.log(aboutInfo);
  }

  editHome(homeInfo : object){
    this.homeInfoDialog = true;
    this.homeInfo = {...homeInfo};
    console.log(homeInfo);
  }

  editFooter(footerInfo : object){
    this.footerInfoDialog = true;
    this.footerInfo = {...footerInfo}
    console.log(footerInfo);
  }

  editFaq(faqInfo : object){
    this.faqInfoDialog = true;
    this.faqInfo = {...faqInfo};
    console.log(faqInfo);
  }

  hideContactDialog(){
    this.contactInfoDialog = false;

  }

  hideContactHoursDialog(){
    this.contactHoursDialog = false;
  }

  hideAboutDialog(){
    this.aboutInfoDialog = false;
  }

  hideHomeDialog(){
    this.homeInfoDialog = false;
  }

  hideFooterDialog(){
    this.footerInfoDialog = false;
  }

  hideFaqDialog(){
    this.faqInfoDialog = false;
  }

  saveContactInfo(info : any){
    console.log(info);
    this.confirmationService.confirm({
      message: "Are you sure you want to change contact page?",
      header: "Confirm",
      icon: "pi pi-exclamation-triangle",
      accept: ()  => {
        this.adminControlsService.updateContact(info).subscribe(data => {
          console.log("inside")
          console.log(data);
          this.reloadData();
        });
      }
    })
    this.contactInfoDialog = false;
  }

  saveContactHours(info : any){
    console.log(info);
    this.confirmationService.confirm({
      message: "Are you sure you want to change contact hours?",
      header: "Confirm",
      icon: "pi pi-exclamation-triangle",
      accept: ()  => {
        this.adminControlsService.updateContact(info).subscribe(data => {
          console.log("inside")
          console.log(data);
          this.reloadData();
        });
      }
    })
    this.contactHoursDialog = false;
  }

  saveAboutInfo(info : any){
    console.log(info);
    this.confirmationService.confirm({
      message: "Are you sure you want to change the about page?",
      header: "Confirm",
      icon: "pi pi-exclamation-triengle",
      accept: () => {
        this.adminControlsService.updateAbout(info).subscribe(data => {
          console.log("Inside about");
          console.log(data);
          this.reloadData();
        })
      }
    })
    this.aboutInfoDialog = false;
  }

  saveHomeInfo(info : any){
    console.log(info);
    this.confirmationService.confirm({
      message: "Are you sure you want to change the about page?",
      header: "Confirm",
      icon: "pi pi-exclamation-triengle",
      accept: () => {
        this.adminControlsService.updateHome(info).subscribe(homeD => {
          console.log("Inside Home");
          console.log(homeD);
          this.reloadData();
        })
      }
    })
    this.homeInfoDialog = false;
  }

  saveFooterInfo(info : any){
    console.log(info);
    this.confirmationService.confirm({
      message: "Are you sure you want to change the footer page?",
      header: "Confirm",
      icon: "pi pi-exclamation-triengle",
      accept: () => {
        this.adminControlsService.updateFooter(info).subscribe(footerD => {
          console.log("Inside Footer");
          console.log(footerD);
          this.reloadData();
        })
      }
    })
    this.footerInfoDialog = false;
  }

  saveFaqInfo(info : any){
    console.log(info);
    this.confirmationService.confirm({
      message: "Are you sure you want to change the faq page?",
      header: "Confirm",
      icon: "pi pi-exclamation-triengle",
      accept: () => {
        this.adminControlsService.updateFaq(info).subscribe(faqD => {
          console.log("Inside Footer");
          console.log(faqD);
          this.reloadData();
        })
      }
    })
    this.faqInfoDialog = false;
  }


}
