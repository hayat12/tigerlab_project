import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { GadgetPage1Component } from './gadget-page1/gadget-page1.component';
import { GadgetPage3Component } from './gadget-page3/gadget-page3.component';
import { YouPage1Component } from './you-page1/you-page1.component';
import { YouPage2Component } from './you-page2/you-page2.component';
import { YouPage3Component } from './you-page3/you-page3.component';
import { PurchasePage1Component } from './purchase-page1/purchase-page1.component';
import { PurchasePage4Component } from './purchase-page4/purchase-page4.component';
import { PurchasePage5Component } from './purchase-page5/purchase-page5.component';
import { NotFoundComponent } from './not-found/not-found.component';
const appRouts: Routes = [
    {
        path: '',
        component: GadgetPage1Component
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'gadgetp1',
        component: GadgetPage1Component
    },
    {
        path: 'gadgetp3',
        component: GadgetPage3Component
    },
    {
        path: 'you-p1',
        component: YouPage1Component
    },
    {
        path: 'you-p2',
        component: YouPage2Component
    },
    {
        path: 'you-p3',
        component: YouPage3Component
    },
    {
        path: 'purchase-p1',
        component: PurchasePage1Component
    },
    {
        path: 'purchase-p4',
        component: PurchasePage4Component
    },
    {
        path: 'purchase-p5',
        component: PurchasePage5Component
    },
    {
        path: '**',
        component: NotFoundComponent
    }
]

@NgModule({
    imports: [
      RouterModule.forRoot(
        appRouts
      )
    ],
    exports:[
         RouterModule
    ]
  })
  export class AppRoutingModule{}