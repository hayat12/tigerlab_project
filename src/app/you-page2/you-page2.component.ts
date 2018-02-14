import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-you-page2',
  templateUrl: './you-page2.component.html',
  styleUrls: ['./you-page2.component.css']
})
export class YouPage2Component implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

  NextPage(){
    this.router.navigate(['/you-p3']);
  }

}
