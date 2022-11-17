import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { Box } from 'src/app/models/box';

@Component({
  selector: 'app-admininventory',
  templateUrl: './admininventory.component.html',
  styleUrls: ['./admininventory.component.css']
})
export class AdmininventoryComponent implements OnInit {

  boxDialog: boolean = false;

  boxes: Box[] = [];

  box : Box | undefined;

  selectedBoxes : Box[] = [];

  submitted : boolean = false;

  statuses : any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
