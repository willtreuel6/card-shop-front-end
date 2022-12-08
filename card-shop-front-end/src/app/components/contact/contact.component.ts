import { Component, OnInit } from '@angular/core';
import { AdminControlsService } from 'src/app/services/admin-controls.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactInfoSet : any = [];

  constructor(private adminControlsService : AdminControlsService) { }

  ngOnInit(): void {
    this.reloadData();

  }

  reloadData(){
    this.adminControlsService.getContact()
    .subscribe(res => {
      console.log(res)
      this.contactInfoSet = res
    });

  }
}
