import { Component, Input, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Card } from 'src/app/models/card';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-admin-inventory-cards',
  templateUrl: './admin-inventory-cards.component.html',
  styleUrls: ['./admin-inventory-cards.component.css'],
  providers:[ConfirmationService, MessageService]
})
export class AdminInventoryCardsComponent implements OnInit {

  cardDialog: boolean = false;

  newCardDialog: boolean = false;

  cards: any = {};
  
  @Input('ngModel')
  card : Card;

  selectedBoxes : Card[] = [];

  submitted : boolean = false;

  statuses : any[] = [];

  payload : any = {}


  constructor(private cardService : CardService, private confirmationService : ConfirmationService, private messageService : MessageService) { }

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

  openNew(){
    this.newCardDialog = true;
    this.submitted = false;
    this.card = {}
  }

  deleteSelectedBoxes(){}

  editCard(card : Card){
    this.cardDialog = true;
    this.card = {...card};
    console.log(card);
  }

  deleteCard(id : number){
    this.confirmationService.confirm({
      message: "Are you sure you want to delete?",
      header: "Confirm",
      icon: "pi pi-exclamation-triangle",
      accept: ()  => {
        this.cardService.deleteCard(id).subscribe(data => {
          console.log(data);
          this.reloadData();
        })
      }
    })
  }
  
  

  hideDialog(){
    this.cardDialog = false;
    this.submitted = false;
  }

  saveBox(card : Card){
    console.log(card);
    this.confirmationService.confirm({
      message: "Are you sure you want to update this box?",
      header: "Confirm",
      icon: "pi pi-exclamation-triangle",
      accept: ()  => {
        this.cardService.updateCard(card).subscribe(data => {
          console.log(data);
          this.reloadData();
        });
      }
    })
    this.cardDialog = false;

  }

  saveNewBox(card : Card){
    console.log(card);
    this.confirmationService.confirm({
      message: "Are you sure you want to create this box?",
      header: "Confirm",
      icon: "pi pi-exclamation-triangle",
      accept: ()  => {
        this.cardService.createCard(card).subscribe(data => {
          console.log(data);
          this.reloadData();
        });
      }
    })
    this.newCardDialog = false;

  }

}
