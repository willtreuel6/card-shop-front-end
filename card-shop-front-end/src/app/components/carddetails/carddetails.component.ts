import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-carddetails',
  templateUrl: './carddetails.component.html',
  styleUrls: ['./carddetails.component.css']
})
export class CarddetailsComponent implements OnInit {

  id : string;

  num : number = 0;

  card : any = [];

  cardId : string = "";

  cardIdNum : number;

  constructor(private route: ActivatedRoute, private cardService : CardService) { }

  ngOnInit(): void {
      this.route.params.subscribe(params => {
      console.log('The id of this route is: ', params['id']);
      this.id = params['id'];
      console.log("ID :" +this.id)
      this.findCardId(this.id);

      this.cardService.getCardById(this.cardIdNum)
      .subscribe(res => {
        this.card = res
        console.log(res);
  
      });

    });
    
  }

  findCardId(cardString : string){
    while(cardString[this.num] != "-"){
      this.cardId += cardString[this.num];
      this.num++;
    }
    console.log("Card string : " + cardString)
    console.log("Card ID Function : " + this.cardId);
    this.cardIdNum = parseInt(this.cardId)
    console.log(this.cardIdNum);
  }

}
