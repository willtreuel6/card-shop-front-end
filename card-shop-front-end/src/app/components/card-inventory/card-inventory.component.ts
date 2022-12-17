import { Component, OnInit, ViewChild } from '@angular/core';
import { Card } from 'src/app/models/card';
import { CardService } from 'src/app/services/card.service';
import {SelectItem} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { DataView } from 'primeng/dataview';

@Component({
  selector: 'app-card-inventory',
  templateUrl: './card-inventory.component.html',
  styleUrls: ['./card-inventory.component.scss']
})
export class CardInventoryComponent implements OnInit {

  @ViewChild( 'dv') dv : DataView;

  sports: any[];

  selectedSports : any[];

  //card : Card;

  cards : any = [];

  allCards : any =[];

  sortOptions: SelectItem[];

  sortOrder: number;

  sortField: string;

  sortKey : string;

  searchTerm = '';


  

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
      this.allCards = this.cards;
      console.log(res)
      console.log(this.cards)
    })
  }

  onSortChange(event : any){
    let value = event.value;
    console.log(value);

    if(value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    }else{
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  search(value: string): void{
    this.cards = this.allCards.filter((val: { cardName: string }) =>
    val.cardName.toLowerCase().includes(value.toLowerCase()))
  }
  


}
