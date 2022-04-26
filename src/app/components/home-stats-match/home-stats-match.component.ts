import { Component, OnInit } from '@angular/core';
import { FootballserviceService } from 'src/app/services/footballservice.service';
import { cardsUserData, Response } from 'src/modules/homeSports';

@Component({
  selector: 'app-home-stats-match',
  templateUrl: './home-stats-match.component.html',
  styleUrls: ['./home-stats-match.component.css']
})
export class HomeStatsMatchComponent implements OnInit {

  data:Response[]=[];
  cards:cardsUserData[]=[];
  premierCode:string="ENGLAND: Premier League";
  SerieACode:string = "ITALY: Serie A";
  

  constructor(private FootballService: FootballserviceService) { }

  ngOnInit(): void {
    this.FootballService.getAllData().subscribe((result)=>{
      //console.log(result);
      this.data=result.response
      this.cards=this.data.filter(item=> item.competition === this.premierCode || item.competition === this.SerieACode).map((item)=>{
        let chosenData:cardsUserData={
          title:item.title,
          competition:item.competition,
          thumbnail:item.thumbnail,
          matchviewUrl:item.matchviewUrl,
        }
        console.log(chosenData)
        return chosenData
      })
    })
  }

  

  




}
