import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cart} from '../../app/interface/apiterface'
import { catchError } from 'rxjs';
@Component({
  selector: 'app-methods',
  templateUrl: './methods.component.html',
  styleUrl: './methods.component.scss'
})
export class MethodsComponent implements OnInit{

  constructor(private httpClient:HttpClient){

  }

  ngOnInit(): void {
    // this.getApiCalls()
    // this.getApiCallsPromise()
    // this.getApiCallsPromisePipe()
    this.getApiCallAsyncAwait()
  }

  getApiCalls(){
    this.httpClient.get<any>('https://dummyjson.com/carts').subscribe((res:Cart)=>{
      console.log("get res",res);
      if(true){
        console.log("get true"); 
      }
    })
  }

  getApiCallsPromise(){
    this.httpClient.get<any>('https://dummyjson.com/carts').toPromise().then((res:Cart)=>{
      console.log("get value--->",res);
      if(true){
        console.log("get true--->"); 
      }
    })
    .catch((error:any)=>{
      console.log("get error message",error);
    })
  }

  getApiCallsPromisePipe(){
    this.httpClient.get<any>('https://dummyjson.com/carts').pipe(
      catchError((error: any) => {
        console.log("Error fetching data:", error);
        return (error); // Return a new Observable emitting the error
      })
    ).subscribe((res:Cart)=>{
      console.log("get cart===>",res);
    })
  }

  async getApiCallAsyncAwait(){
    try{
      const res:any=await this.httpClient.get<Cart>('https://dummyjson.com/carts/av').toPromise()
      console.log("get res +",res);
      if (res) {
        console.log("get true +"); 
      }
    } catch (error){
      console.log("get res + error",error);
      
    }
  }



}
