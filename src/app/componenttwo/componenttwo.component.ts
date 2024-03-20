import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-componenttwo',
  templateUrl: './componenttwo.component.html',
  styleUrl: './componenttwo.component.scss'
})
export class ComponenttwoComponent implements OnInit{
  postsArray:any=[]
  
  constructor(private httpClient:HttpClient){

  }

  ngOnInit(): void {
    this.httpClient.get('https://dummyjson.com/posts').subscribe((res:any)=>{
      console.log("get user",res);
      if(res){
        this.postsArray=res.posts
        console.log("get postArray",this.postsArray);
        
      }
    })
  }

}
