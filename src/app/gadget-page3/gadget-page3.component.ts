import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../security/service.service';
@Component({
  selector: 'app-gadget-page3',
  templateUrl: './gadget-page3.component.html',
  styleUrls: ['./gadget-page3.component.css']
})
export class GadgetPage3Component implements OnInit {

  constructor(
    private service : ServiceService,
    public router   : Router
  ) { 
    this.service.headerPrice(true).then((res)=>{
      console.log(res);
    }).catch((err)=>{
      console.log(err);
    });
  }

  ngOnInit() {
  }

  NextPage(v){
    this.service.AddNewGadget(v).then((resp)=>{
      console.log(v);
       this.router.navigate(['/you-p1']);
    }).catch((err)=>{
      console.log(err);
    })
  }

}
