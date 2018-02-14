import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { FormsModule, FormBuilder } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
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
import { HeaderComponent } from './header/header.component';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { ServiceService } from '../app/security/service.service';
import { PopupComponent } from './popup/popup.component'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GadgetPage1Component,
    GadgetPage3Component,
    YouPage1Component,
    YouPage2Component,
    YouPage3Component,
    PurchasePage1Component,
    PurchasePage4Component,
    PurchasePage5Component,
    NotFoundComponent,
    HeaderComponent,
    HomeHeaderComponent,
    PopupComponent
  ],
  entryComponents: [
    PopupComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    TabsModule.forRoot(),
    ButtonsModule.forRoot()
  ],
  providers: [
    BsModalService,
    BsModalRef,
    ServiceService,
    FormBuilder
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
