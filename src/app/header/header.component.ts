import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../security/service.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showSelected: boolean = true;
  resp: any;
  constructor(
    private service: ServiceService
  ) {
   }
  ngOnInit(){
    this.service.headerPrice(this.showSelected).then((res)=>{
      this.resp = res;
      this.showSelected  = this.resp;
      console.log(res);
    }).catch((err)=>{
      console.log(err);
    });
  }

}
