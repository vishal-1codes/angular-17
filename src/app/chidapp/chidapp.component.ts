import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-chidapp',
  templateUrl: './chidapp.component.html',
  styleUrl: './chidapp.component.scss'
})
export class ChidappComponent implements OnInit{
  @Input() parentData !: number;
  @Output() dataToParent: EventEmitter<string> = new EventEmitter<string>
  constructor(){

  }

  ngOnInit(): void {
    
  }

  getParent(){
    this.dataToParent.emit("vishal 2");

  }

}
