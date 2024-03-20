import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componentone',
  templateUrl: './componentone.component.html',
  styleUrl: './componentone.component.scss'
})
export class ComponentoneComponent implements OnInit{

  logginIn:boolean=false;

  accessLevel:string="user";

  users:any=[]

  constructor(){

  }

  ngOnInit(): void {
    this.users=[
      {id:1,name:'vishal'},
      {id:2,name:'vinayak'},
      {id:3,name:'vijeta'},
      {id:4,name:'vighnesh'},
    ]
  }

  getUserById(users:any){
    console.log("get user",users);
    
  }

}
