import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig, SelectItem } from 'primeng/api';
import { Observable } from 'rxjs';
import { Box } from 'src/app/models/box';
import { BoxService } from 'src/app/services/box.service';

@Component({
  selector: 'app-box-inventory',
  templateUrl: './box-inventory.component.html',
  styleUrls: ['./box-inventory.component.scss']
})
export class BoxInventoryComponent implements OnInit {


  boxes : any = {};

  box : Box;

  sortOptions: SelectItem[];

  sortOrder: number;

  sortField: string;

  sortKey : string;

  allBoxes : any = [];

  searchTerm = '';

  searchTermSport = "";

  searchTermYear = '';


  constructor(private boxService : BoxService, private primengConfig: PrimeNGConfig, private router : Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
    this.boxService.getBoxList()
    .subscribe(res => {
      this.boxes = res
      this.allBoxes = this.boxes;

    });
    console.log(this.boxes);
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
    this.boxes = this.allBoxes.filter((val: { boxName: string }) =>
    val.boxName.toLowerCase().includes(value.toLowerCase()));
  }

  searchSport(value: string) : void{
    this.boxes = this.allBoxes.filter((val: {boxSport: string}) =>
    val.boxSport.toLowerCase().includes(value.toLowerCase()));
  }

  searchYear(value : string) : void{
    this.boxes = this.allBoxes.filter((val: {boxYear: string}) =>
    val.boxYear.toString().includes(value));
  }





}
