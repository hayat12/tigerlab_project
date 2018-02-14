import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-purchase-page5',
  templateUrl: './purchase-page5.component.html',
  styleUrls: ['./purchase-page5.component.css']
})
export class PurchasePage5Component implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }
  NextPage(){
    this.router.navigate(['/home']);
  }

}
