import { getLocaleId } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BoxService } from 'src/app/services/box.service';

@Component({
  selector: 'app-boxdetails',
  templateUrl: './boxdetails.component.html',
  styleUrls: ['./boxdetails.component.css']
})
export class BoxdetailsComponent implements OnInit {

  @Input() object: string;

  id : string;

  num : number = 0;

  box : any = [];

  boxId : string = "";

  boxIdNum : number;

  constructor(private route: ActivatedRoute, private boxService : BoxService) { }

  ngOnInit(): void {
      this.route.params.subscribe(params => {
      console.log('The id of this route is: ', params['id']);
      this.id = params['id'];
      console.log("ID :" +this.id)
      this.findBoxId(this.id);

      this.boxService.getBoxById(this.boxIdNum)
      .subscribe(res => {
        this.box = res
        console.log(res);
  
      });

    });
    
  }

  findBoxId(boxString : string){
    while(boxString[this.num] != "-"){
      this.boxId += boxString[this.num];
      this.num++;
    }
    console.log("Box string : " + boxString)
    console.log("Box ID Function : " + this.boxId);
    this.boxIdNum = parseInt(this.boxId)
    console.log(this.boxIdNum);
  }

}
