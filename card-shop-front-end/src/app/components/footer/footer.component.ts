import { Component, OnInit } from '@angular/core';
import { AdminControlsService } from 'src/app/services/admin-controls.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  footerInfoSet : any = {}

  constructor(private adminControlService : AdminControlsService) { }

  ngOnInit(): void {
    this.adminControlService.getFooter().subscribe( footD => {
      this.footerInfoSet = footD;
      console.log(footD);
    })
  }

}
