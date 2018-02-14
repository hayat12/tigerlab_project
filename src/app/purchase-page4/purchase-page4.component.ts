import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../security/service.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { PopupComponent } from '../popup/popup.component';
@Component({
  selector: 'app-purchase-page4',
  templateUrl: './purchase-page4.component.html',
  styleUrls: ['./purchase-page4.component.css']
})
export class PurchasePage4Component implements OnInit {
  name: any;
  constructor(
    public router   : Router,
    public bsModalRef : BsModalRef,
    public modalService : BsModalService,
    private service : ServiceService
  ) { }

  ngOnInit() {
    this.name = "hayatullah"
  }
  DoPayment(v){
    this.service.DoPayment(v).then((resp)=>{
      console.log(v);
    this.router.navigate(['/purchase-p5']);      
    }).catch((err)=>{
      console.log(err);
    });
  }


  openModalWithComponent(v) {
    const initialState = {
      list: [
        'Open a modal with component',
        v.payType,
      ],
      title: 'Modal with component'
    };
    this.bsModalRef = this.modalService.show(PopupComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
  }
}
