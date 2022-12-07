import { Component, OnInit } from '@angular/core';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-admin-email',
  templateUrl: './admin-email.component.html',
  styleUrls: ['./admin-email.component.css']
})
export class AdminEmailComponent implements OnInit {

  emails : any = {};

  constructor(private emailService : EmailService) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){

    this.emailService.getEmailList()
    .subscribe(res => {
      this.emails = res
    });
    console.log(this.emails);
    console.log(this.emailService.)
  }

}
