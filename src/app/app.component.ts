import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  sendChild:any;
  fromChild:any;
  constructor(){

  }

  ngOnInit(): void {
    this.sendChild="vishal"
  }
  title = 'docker-app-new';


  postParent(){

  }

  receiveDataFromChild(data: string) {
    console.log('Received data from child:', data);
    this.fromChild=data;
    // You can do further processing with the received data in the parent component.
  }

}
