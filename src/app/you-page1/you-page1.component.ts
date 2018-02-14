import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../security/service.service';
@Component({
  selector: 'app-you-page1',
  templateUrl: './you-page1.component.html',
  styleUrls: ['./you-page1.component.css']
})
export class YouPage1Component implements OnInit {

  constructor(
    private service: ServiceService,
    public router: Router
  ) { }

  ngOnInit() {
  }

  BuyOption(v){
    this.service.ShippingType(v).then((resp)=>{
      console.log(resp);
      this.router.navigate(['/you-p2']);
    }).catch((err)=>{
      console.log(err);
    });
  }

}
