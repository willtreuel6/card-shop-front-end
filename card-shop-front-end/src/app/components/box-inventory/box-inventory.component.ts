import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig, SelectItem } from 'primeng/api';
import { Observable } from 'rxjs';
import { Box } from 'src/app/models/box';
import { BoxService } from 'src/app/services/box.service';

@Component({
  selector: 'app-box-inventory',
  templateUrl: './box-inventory.component.html',
  styleUrls: ['./box-inventory.component.css']
})
export class BoxInventoryComponent implements OnInit {


  boxes : Observable<Box[]>;

  sortOrder: number;

  sortField: string;

  sortOptions: SelectItem[];


  constructor(private boxService : BoxService, private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    //this.boxes = this.boxService.getBoxList();
    console.log(this.boxes);

  }




}
