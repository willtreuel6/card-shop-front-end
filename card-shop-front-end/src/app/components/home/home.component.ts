import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Card } from 'src/app/models/card';
import { Email } from 'src/app/models/email';
import { BoxService } from 'src/app/services/box.service';
import { CardService } from 'src/app/services/card.service';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cards: any = [];

  emails: any = [];

  @Input('ngModel')
  email : Email = {};

  responsiveOptions : any;


  constructor(private cardService: CardService, private router: Router, private emailService : EmailService) {
    
   }

  ngOnInit(): void {
    this.cardService.getCardList().subscribe(res => {
      this.cards = res
    });
    console.log(this.cards)
    console.log(this.email);

  }

  addHomeEmail(email : Email){
    this.emailService.addEmail(email).subscribe(res => {
      console.log("service");
    }

    )
    console.log(email);
    console.log(this.emailService.showPath());
}
}



