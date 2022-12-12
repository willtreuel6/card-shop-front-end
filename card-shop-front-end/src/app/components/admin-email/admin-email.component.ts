import { Component, OnInit } from '@angular/core';
import { EmailService } from 'src/app/services/email.service';
import { ngxCsv } from 'ngx-csv';

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
  }

  fileDownload(){
    var options = { 
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true, 
      showTitle: true,
      title: 'EmailList',
      useBom: true,
      noDownload: false,
      headers: ["#", "Email"]
    };
   
    new ngxCsv(this.emails, "EmailList", options);
  }
}
