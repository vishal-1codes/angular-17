import { Component, OnInit, ViewChild, effect } from '@angular/core';
import { ViewchildtwoComponent } from '../viewchildtwo/viewchildtwo.component';
import { GlobalService } from '../services/global.service';
@Component({
  selector: 'app-viewchildone',
  templateUrl: './viewchildone.component.html',
  styleUrl: './viewchildone.component.scss'
})
export class ViewchildoneComponent implements OnInit{
  @ViewChild(ViewchildtwoComponent) childComponentData !: ViewchildtwoComponent;
  
  constructor(private globalService:GlobalService){
    
  }

  ngOnInit(): void {
 
  }

  passData(){
    this.childComponentData.receivedData = "Data passed from parent";
  }

 
}
