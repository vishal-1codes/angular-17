import { Component, OnInit, effect, signal } from '@angular/core';
import { GlobalService } from '../services/global.service';
@Component({
  selector: 'app-signalone',
  templateUrl: './signalone.component.html',
  styleUrl: './signalone.component.scss'
})
export class SignaloneComponent implements OnInit{

  ourArray:any=[]

  displayCount=0;

  displayAmt:any;

  constructor(private globalService:GlobalService){
    effect(() => {
      console.log(
      this.globalService.getArray(),this.globalService.getCartValue()
    )
    
    }
    
    );
  }

  ngOnInit(): void {
   
  }

  updateSignal(nameData:any){
    this.ourArray.push({name:nameData})
    this.globalService.setSignal(this.ourArray)
  }

  increaseCount(){
    this.globalService.carValueIncrease()
    this.displayCount=this.globalService.getCartValue()
  }

  decreaseCount(){
    this.globalService.cartValueDecrease()
    this.displayCount=this.globalService.getCartValue()
  }

  valueOne(event:any){
    console.log("event one",event.target.value);
    this.globalService.changeValue1Fun(Number(event.target.value))
    this.getAdditionValue()
  }

  valuetwo(event:any){
    console.log("event two",event.target.value);
    this.globalService.changeValue2Fun(Number(event.target.value))
    this.getAdditionValue()
  }

  getAdditionValue(){
    this.displayAmt=this.globalService.getAddition()
  }

  callObj(){
    this.globalService.mutateFunction({price:1000})
  }

}
