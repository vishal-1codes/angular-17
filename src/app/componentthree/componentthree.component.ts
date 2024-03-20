import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-componentthree',
  templateUrl: './componentthree.component.html',
  styleUrl: './componentthree.component.scss'
})
export class ComponentthreeComponent implements OnInit{
  @Input() webinar: any;
  constructor(){

  }

  ngOnInit(): void {
    
  }

}
