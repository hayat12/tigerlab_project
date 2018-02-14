import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../security/service.service';
@Component({
  selector: 'app-you-page3',
  templateUrl: './you-page3.component.html',
  styleUrls: ['./you-page3.component.css']
})
export class YouPage3Component implements OnInit {

  constructor(
    public router: Router,
    private service: ServiceService
  ) { }

  ngOnInit() {

  }
  
  Register(v){
    this.service.Register(v).then((resp)=>{
      console.log(resp);
      this.router.navigate(['/purchase-p1']);
    }).catch((err)=>{
      console.log(err);
    });
  }
}
