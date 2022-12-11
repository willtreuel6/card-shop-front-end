import { Component, OnInit } from '@angular/core';
import { About } from 'src/app/models/about';
import { AdminControlsService } from 'src/app/services/admin-controls.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  aboutInfo : About;

  aboutInfoSet : any = {};


  constructor(private adminControlService : AdminControlsService) { }

  ngOnInit(): void {
    this.adminControlService.getAbout().subscribe( res => {
      this.aboutInfoSet = res;
      console.log(res);
    });
  }

}
