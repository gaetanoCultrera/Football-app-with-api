import { matchTable,Data } from 'src/modules/matchStatsInterface';
import { Component, OnInit } from '@angular/core';
import { LiveMatchSerieAService } from 'src/app/services/live-match-serie-a.service';

@Component({
  selector: 'app-live-match-serie-a',
  templateUrl: './live-match-serie-a.component.html',
  styleUrls: ['./live-match-serie-a.component.css']
})
export class LiveMatchSerieAComponent implements OnInit {

  match:Data[]=[];
  userData: matchTable[] = [];

  constructor(private LiveMatchSerieAService:LiveMatchSerieAService) { }

 

  ngOnInit(): void {
    this.LiveMatchSerieAService.getAllMatchLive().subscribe((result)=>{
      this.match=result.data;
      console.log(this.match);
      this.userData=this.match.map((item)=>{
        let chosenData: matchTable = {
          homeTeam: item.home_team.name,
          awayTeam: item.away_team.name,
          homeScore: item.stats.home_score,
          awayScore: item.stats.away_score,
          logoAwayTeam:item.away_team.logo,
          logoHomeTeam:item.home_team.logo,
          matchStart: item.match_start,
          minute: item.minute,
        }
        return chosenData;
      })
  })
  }

  
    

}
