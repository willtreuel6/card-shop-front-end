import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Avatar } from 'primeng/avatar';
import { AvatarGroup } from 'primeng/avatargroup';
import { Observable } from 'rxjs';
import { Card } from 'src/app/models/card';
import { Email } from 'src/app/models/email';
import { AdminControlsService } from 'src/app/services/admin-controls.service';
import { BoxService } from 'src/app/services/box.service';
import { CardService } from 'src/app/services/card.service';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [MessageService, Avatar, AvatarGroup]
})
export class HomeComponent implements OnInit {

  cards: any = [];

  example : string = "hello";

  boxes: any = [];

  emails: any = [];

  faqs: any = [];

  @Input('ngModel')
  email : Email = {};

  adminControls : any = [];

  responsiveOptions : any;


  constructor(private cardService: CardService, private router: Router, private emailService : EmailService, private messageService:MessageService, 
    private boxService : BoxService, private adminService: AdminControlsService) {
    
   }

  ngOnInit(): void {
    this.cardService.getCardList().subscribe(res => {
      this.cards = res
    });
    console.log(this.cards)
    console.log(this.email);

    this.boxService.getBoxList()
    .subscribe(data => { 
      this.boxes = data;
    })

    this.adminService.getHome()
    .subscribe(homeD => {
      this.adminControls = homeD;
      console.log(homeD);
    })

    this.adminService.getFaq()
    .subscribe(faqD => {
      this.faqs = faqD;
      console.log(faqD);
    })

    this.emailService.getEmailList()
    .subscribe(emailD => {
      this.emails = emailD;
      console.log(this.emails)
    })



  }

  // addHomeEmail(email : Email){
  //   this.messageService.add({key: 'tc', severity:'success', detail: 'Thank You'});
  //   this.emailService.addEmail(email).subscribe(res => {
  //     console.log("service");
  //   });
    
  //   console.log(email);
  //   console.log(this.emailService.showPath());
  // }

  addHomeEmail(email: Email){
    let duplicate : boolean = false;
    for(let eAddress of this.emails){
      if (eAddress['emailAddress'] == email.emailAddress){
        duplicate = true;
      }
    }
    if(duplicate == false){
      this.messageService.add({key: 'tc', severity:'success', detail: 'Thank You For Adding Your Email'});
      this.emailService.addEmail(email)
      .subscribe(res => {
      });
    }else{
      this.messageService.add({key: 'tc', severity:'info', detail: 'We already have your email on file! Thanks!'});
    }
  }
}



