import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../security/service.service';
@Component({
  selector: 'app-purchase-page1',
  templateUrl: './purchase-page1.component.html',
  styleUrls: ['./purchase-page1.component.css']
})
export class PurchasePage1Component implements OnInit {

  constructor(
    private service   : ServiceService,
    public router     : Router
  ) { }

  ngOnInit() {
  }

  AnswerQuestion(v){
    this.service.answerQ(v).then((resp)=>{
      console.log(resp);
    this.router.navigate(['/purchase-p4']);      
    }).catch((er)=>{
      console.log(er);
    });
  }

}
