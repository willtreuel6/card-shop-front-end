import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card';
import { CardService } from 'src/app/services/card.service';
import {SelectItem} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-card-inventory',
  templateUrl: './card-inventory.component.html',
  styleUrls: ['./card-inventory.component.scss']
})
export class CardInventoryComponent implements OnInit {

  sports: any[];

  selectedSports : any[];

  //card : Card;

  cards : any = [];

  sortOptions: SelectItem[];

  sortOrder: number;

  sortField: string;

  constructor(private cardService : CardService, private primengConfig : PrimeNGConfig) {
   }

  ngOnInit(): void {
    this.reloadData();

    this.sortOptions = [
      {label : 'Price High to Low', value: '!price'},
      {label: 'Price Low to High', value: 'price'}
    ];

    this.primengConfig.ripple = true;
  }

  reloadData(){
    this.cardService.getCardList()
    .subscribe(res => {
      this.cards = res;
      console.log(res)
      console.log(this.cards)
    })
  }

  onSortChange(event: { value: any; }){
    let value = event.value;

    if(value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    }else{
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

}
