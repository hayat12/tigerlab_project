import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormBuilder } from '@angular/forms';

import { Router } from '@angular/router';
import { ServiceService } from '../security/service.service';
import { reject } from 'q';
@Component({
  selector: 'app-gadget-page1',
  templateUrl: './gadget-page1.component.html',
  styleUrls: ['./gadget-page1.component.css']
})
export class GadgetPage1Component implements OnInit {
  myForm: FormGroup;
  minDate: any;
  maxDate: any;
  errorMessage: boolean = false;
  responseErrorMesssage: any;
    type          : any = 'Type';
    make          : any = 'Make';
    date          : any;
    myrod           : any;

  checkModel: any = { left: false, middle: true, right: false };
  constructor(
    private service   : ServiceService,
    public router     : Router,
    private formBuilder: FormBuilder
  ) { 
    
  }

  ngOnInit() {
    
    this.myForm = this.formBuilder.group({
      radio: 'C'
    });
    
    this.minDate = new Date(2017, 5, 10);
    this.maxDate = new Date(2018, 9, 15);
  }
  NextPage(v){
    console.log(v.make);
    
        this.make = v.make;
        this.type = v.type;
        this.date = v.mydate;
        this.myrod  = v.rod;
    if(this.type ==='Type'){
      this.responseErrorMesssage = "Type Filed";
      this.errorMessage = true;
    }
    else if(this.make ==='Make'){
      this.responseErrorMesssage = "Make Filed";
      this.errorMessage = true;
    }
    else if(this.date === null || this.date ===''){
      this.responseErrorMesssage = "Date Filed";
      this.errorMessage = true;
    } else{
      this.errorMessage = false;

      this.service.AddNewGadget(v).then((resp)=>{
        console.log(v);
        this.router.navigate(['/gadgetp3']);
      }).catch((er)=>{
        reject(false);
      });

    }
  }
  check(e){
    console.log(e);
  }
  addAnother(){
    console.log('add more');
  }
  backBtn(){
    this.router.navigate(['/home']);
    
  }
}
