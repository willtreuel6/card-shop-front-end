import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Card } from 'src/app/models/card';
import { BoxService } from 'src/app/services/box.service';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cards: any = {}

  responsiveOptions : any;

  constructor(private boxService: BoxService, private router: Router) {
    
   }

  ngOnInit(): void {
    this.boxService.getBoxList().subscribe(res => {
      this.cards = res
    });

  }
}



