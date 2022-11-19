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
  styleUrls: ['./admin-inventory-boxes.component.scss'],
  providers: [ConfirmationService, MessageService]
})
export class AdminInventoryBoxesComponent implements OnInit {
  
  boxDialog: boolean = false;

  boxes!: Observable<Box[]>;

  box : Box | undefined;

  selectedBoxes : Box[] = [];

  submitted : boolean = false;

  statuses : any[] = [];

  payload : any = {}


  constructor(private boxService : BoxService, private confirmationService : ConfirmationService, private messageService : MessageService) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
    this.boxes = this.boxService.getBoxList();
    console.log(this.boxes);
  }

  openNew(){
    this.payload = {};
    this.submitted = false;
    this.boxDialog = true;
  }

  deleteSelectedBoxes(){}

  editBox(id : number){}

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

  saveBox(){}


}
