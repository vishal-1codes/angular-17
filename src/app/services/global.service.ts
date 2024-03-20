import { Injectable, OnInit, computed, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService implements OnInit{

  getArray=signal([])
  cartValue=signal(0)

  changeValue1=signal(0)
  changeValue2=signal(0)

  constructor() { }

  ngOnInit(): void {
    
  }

  updateSignal(updateValue:any){
    this.getArray.update(updateValue)
  }

  setSignal(setValue:any){
    this.getArray.set(setValue)
  }

  carValueIncrease(){
    this.cartValue.update((qut=>qut + 1))
  }

  cartValueDecrease(){
    if(this.cartValue() != 0){
      this.cartValue.update((qut=>qut - 1))
    }
  }

  getCartValue(){
    return this.cartValue()
  }

  changeValue1Fun(value:any){
    this.changeValue1.set(value)
  }

  changeValue2Fun(value:any){
    this.changeValue2.set(value)
  }

  getAddition(){
    return computed(()=>this.changeValue1() + this.changeValue2())
  }

  mutateFunction(valObj:any){
   console.log("call object", valObj.mutate((v:any) => v.price = v.price + (v.price * .20)));
   
  }

}
