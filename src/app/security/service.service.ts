import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
@Injectable()
export class ServiceService {

  constructor(
    private http: HttpClient
  ) { 

  }
public headerPrice(v){ 
  return new Promise((resolve, reject) => {
      resolve(v);
  })
}
AddNewGadget(formdata){ 
  return new Promise((resolve, reject) => {
    resolve(formdata);
    // let body 		   : 	string 		=	"key=SignUp &name=",
    //     type       : 	string  	= 	"application/x-www-form-urlencoded; charset=UTF-8",
    //     headers 	 : 	any 		  = 	new Headers({ 'Content-Type': type}),
    //     options 	 : 	any 		  = 	new HttpResponse({headers : headers}),
    //     url 		   : 	any 		  = 	"SalePerson/retriveSaleP.php";

    //    this.http.post(url,body,options)
    //    .subscribe(res => {
    //           resolve(res);
    //       }, (err) => {
    //         reject(err);
    //       });
  });
 }

 ShippingType(v){
  return new Promise((resolve, reject) => {
    resolve(v);
    });
 }

 Register(v){
  return new Promise((resolve, reject) => {
    resolve(v);
    });
 }

 answerQ(v){
  return new Promise((resolve, reject) => {
    resolve(v);
    });
 }
 DoPayment(v){
   return new Promise((resolve)=>{
    resolve(v);
   })
 }

}