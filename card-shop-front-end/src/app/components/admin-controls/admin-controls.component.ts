import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { AdminControlsService } from 'src/app/services/admin-controls.service';

@Component({
  selector: 'app-admin-controls',
  templateUrl: './admin-controls.component.html',
  styleUrls: ['./admin-controls.component.css']
})
export class AdminControlsComponent implements OnInit {

  contactInfo : any = {};
  constructor(private adminControlsService : AdminControlsService) { }

  ngOnInit(): void {
    this.adminControlsService.getContact()
    .subscribe(res => {
      console.log(res)
      this.contactInfo = res
    });

  }

  editContact(contactInfo : object){}

}
