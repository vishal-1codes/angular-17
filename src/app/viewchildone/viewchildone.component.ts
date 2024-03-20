import { Component, OnInit, ViewChild } from '@angular/core';
import { ViewchildtwoComponent } from '../viewchildtwo/viewchildtwo.component';
@Component({
  selector: 'app-viewchildone',
  templateUrl: './viewchildone.component.html',
  styleUrl: './viewchildone.component.scss'
})
export class ViewchildoneComponent implements OnInit{
  @ViewChild(ViewchildtwoComponent) childComponentData !: ViewchildtwoComponent;
  
  constructor(){

  }

  ngOnInit(): void {
   
  }

  passData(){
    this.childComponentData.receivedData = "Data passed from parent";
  }

}
