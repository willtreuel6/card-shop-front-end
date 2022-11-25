import { Component, Input, OnInit } from '@angular/core';
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
  styleUrls: ['./admin-inventory-boxes.component.scss'],
  providers: [ConfirmationService, MessageService]
})
export class AdminInventoryBoxesComponent implements OnInit {
  
  boxDialog: boolean = false;

  newBoxDialog: boolean = false;

  boxes: any = {};
  
  @Input('ngModel')
  box : Box;

  selectedBoxes : Box[] = [];

  submitted : boolean = false;

  statuses : any[] = [];

  payload : any = {}


  constructor(private boxService : BoxService, private confirmationService : ConfirmationService, private messageService : MessageService) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
    this.boxService.getBoxList()
    .subscribe(res => {
      this.boxes = res
    });
    console.log(this.boxes);
  }

  openNew(){
    this.newBoxDialog = true;
    this.submitted = false;
    this.box = {}
  }

  deleteSelectedBoxes(){}

  editBox(box : Box){
    this.boxDialog = true;
    this.box = {...box};
    console.log(box);
  }

  deleteBox(id : number){
    this.confirmationService.confirm({
      message: "Are you sure you want to delete?",
      header: "Confirm",
      icon: "pi pi-exclamation-triangle",
      accept: ()  => {
        this.boxService.deleteBox(id).subscribe(data => {
          console.log(data);
          this.reloadData();
        })
      }
    })
  }
  
  

  hideDialog(){
    this.boxDialog = false;
    this.submitted = false;
  }

  saveBox(box : Box){
    console.log(box);
    this.confirmationService.confirm({
      message: "Are you sure you want to update this box?",
      header: "Confirm",
      icon: "pi pi-exclamation-triangle",
      accept: ()  => {
        this.boxService.updateBox(box).subscribe(data => {
          console.log(data);
          this.reloadData();
        });
      }
    })
    this.boxDialog = false;

  }

  saveNewBox(box : Box){
    console.log(box);
    this.confirmationService.confirm({
      message: "Are you sure you want to create this box?",
      header: "Confirm",
      icon: "pi pi-exclamation-triangle",
      accept: ()  => {
        this.boxService.createBox(box).subscribe(data => {
          console.log(data);
          this.reloadData();
        });
      }
    })
    this.newBoxDialog = false;

  }
}



