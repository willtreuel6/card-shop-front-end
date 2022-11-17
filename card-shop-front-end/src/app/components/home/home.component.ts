import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Card } from 'src/app/models/card';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cards: Observable<Card[]> | undefined;

  constructor(private cardService: CardService, private router: Router) { }

  ngOnInit(): void {
    this.reloadData()
  }

  reloadData() {
    this.cards = this.cardService.getCardList()
  }

}
