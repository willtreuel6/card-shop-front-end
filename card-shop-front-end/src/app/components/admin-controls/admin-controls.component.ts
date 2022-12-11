import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { About } from 'src/app/models/about';
import { Contact } from 'src/app/models/contact';
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

  contactInfo : Contact;

  aboutInfo : About;

  contactInfoDialog : boolean = false;

  aboutInfoDialog : boolean = false;

  constructor(private adminControlsService : AdminControlsService, private confirmationService : ConfirmationService) { }

  ngOnInit(): void {
    this.reloadData();

  }

  reloadData(){
    this.adminControlsService.getContact()
    .subscribe(res => {
      console.log(res)
      this.contactInfoSet = res;
    });

    this.adminControlsService.getAbout()
    .subscribe(res => {
      console.log(res)
      this.aboutInfoSet = res;
    })
  }


  editContact(contactInfo : object){
    this.contactInfoDialog = true;
    this.contactInfo = {...contactInfo};
    console.log(contactInfo);
  }

  editAbout(aboutInfo : object){
    this.aboutInfoDialog = true;
    this.aboutInfo = {...aboutInfo};
    console.log(aboutInfo);
  }

  hideContactDialog(){
    this.contactInfoDialog = false;

  }

  hideAboutDialog(){
    this.aboutInfoDialog = false;
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

  saveAboutInfo(info : any){
    console.log(info);
    this.confirmationService.confirm({
      message: "Are you sure you want to change the contact page?",
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

}
