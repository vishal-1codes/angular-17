import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormArray, Validators } from '@angular/forms';
@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrl: './reactiveform.component.scss'
})
export class ReactiveformComponent implements OnInit{
  newForm !:FormGroup;

  constructor(private formBuilder:FormBuilder){
    this.newForm=this.formBuilder.group({
      name:[''],
      items:this.formBuilder.array([])
    })
  }

  get items(){
    return this.newForm.get('items') as FormArray
  }

  addItem(){
    this.items.push(this.formBuilder.group(
      {
        name:[''],
        quantity:['']
      }
    )
    )
  }

  removeItem(index:number){
    this.items.removeAt(index)
  }

  ngOnInit(): void {
   
  }

  submitForm(){
    console.log("get form value",this.newForm.value);
    
  }

}
