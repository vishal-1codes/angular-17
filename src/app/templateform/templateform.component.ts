import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrl: './templateform.component.scss'
})
export class TemplateformComponent implements OnInit{

  constructor(){

  }

  ngOnInit(): void {
    
  }

  onSubmit(form:any){
    if(form.valid){
      console.log('Form submitted!', form.value);
    }else{
      console.log('Form not submitted!', form.value);
    }
  }

}
