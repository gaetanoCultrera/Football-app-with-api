import { Component, OnInit } from '@angular/core';
import { NewsSportsService } from 'src/app/services/news-sports.service';
import { Result,customInterface } from 'src/modules/newsInterface';

@Component({
  selector: 'app-news-sports',
  templateUrl: './news-sports.component.html',
  styleUrls: ['./news-sports.component.css']
})
export class NewsSportsComponent implements OnInit {
  
  data:Result[]=[];
  cardsNews:customInterface[]=[]

  constructor(private NewsSports:NewsSportsService) { }

  ngOnInit(): void {
    this.getNewsIta();
  }

  getNewsIta() {
    this.NewsSports.getAllNewsItaly().subscribe((result)=>{
      this.data=result.results
      console.log(this.data)
      this.cardsNews=this.data.map((item)=>{
        let chosenData:customInterface={
          title: item.title,
          description:item.description,
          fullDescription:item.full_description,
          imageUrl:item.image_url,
          pubDate:item.pubDate,
          link:item.link,
          videoUrl:item.video_url,
        }
        return chosenData
      })
    })
  }

  getNewsEn() {
    this.NewsSports.getAllNewsEn().subscribe((result)=>{
      this.data=result.results
      this.cardsNews=this.data.map((item)=>{
        let chosenData:customInterface={
          title: item.title,
          description:item.description,
          fullDescription:item.full_description,
          imageUrl:item.image_url,
          pubDate:item.pubDate,
          link:item.link,
          videoUrl:item.video_url,
        }
        return chosenData
      })
  })
}

}
