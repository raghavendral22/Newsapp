import { Component } from '@angular/core';
import {NewsApiService} from '../Service/news-api.service'
@Component({
  selector: 'app-head-lines',
  templateUrl: './head-lines.component.html',
  styleUrl: './head-lines.component.css'
})
export class HeadLinesComponent {
  topheading:any
  show=false;

  constructor(private services:NewsApiService){ 

  }
  topheadingDisplay:any=[];
  ngOnInit():void{
    this.services.topHeading().subscribe((result)=>{
      console.log(result)
      this.topheadingDisplay=result.articles;
    })
  }
}
