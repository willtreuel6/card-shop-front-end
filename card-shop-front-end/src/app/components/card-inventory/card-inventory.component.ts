import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-card-inventory',
  templateUrl: './card-inventory.component.html',
  styleUrls: ['./card-inventory.component.css']
})
export class CardInventoryComponent implements OnInit {


  card : Card;

  cards : any = {};

  constructor(private cardService : CardService) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
    this.cardService.getCardList()
    .subscribe(res => {
      this.cards = res
    });
    console.log(this.cards);
  }

}
