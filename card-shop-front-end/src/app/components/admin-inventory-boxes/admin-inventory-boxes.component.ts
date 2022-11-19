import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
import { Box } from 'src/app/models/box';
import { BoxService } from 'src/app/services/box.service';

@Component({
  selector: 'app-admin-inventory-boxes',
  templateUrl: './admin-inventory-boxes.component.html',
  styles: [
    `
        :host ::ng-deep .p-dialog .product-image {
            width: 150px;
            margin: 0 auto 2rem auto;
            display: block;
        }
    `
  ],
  styleUrls: ['./admin-inventory-boxes.component.scss']
})
export class AdminInventoryBoxesComponent implements OnInit {
  
  boxDialog: boolean = false;

  boxes!: Observable<Box[]>;

  box : Box | undefined;

  selectedBoxes : Box[] = [];

  submitted : boolean = false;

  statuses : any[] = [];


  constructor(private boxService : BoxService) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
    this.boxes = this.boxService.getBoxList();
    console.log(this.boxes);
  }

  openNew(){

  }

  deleteSelectedBoxes(){}

  editBox(id : number){}

  deleteBox(id : number){}


}
