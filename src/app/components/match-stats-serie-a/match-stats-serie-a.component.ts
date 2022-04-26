import { matchTable,Data } from 'src/modules/matchStatsInterface';
import { Component, OnInit } from '@angular/core';
import { ScoreService } from 'src/app/services/Score.service';


@Component({
  selector: 'app-match-stats-serie-a',
  templateUrl: './match-stats-serie-a.component.html',
  styleUrls: ['./match-stats-serie-a.component.css']
})
export class MatchStatsSerieAComponent implements OnInit {

  match:Data[]=[];
  userData: matchTable[] = [];
  term:string="";

  constructor(private ScoreService:ScoreService) { }

  ngOnInit(): void {
    
  }

  search(term:string){
    this.ScoreService.searchIta(term).subscribe((result)=>{
      this.match=result.data
      this.userData=this.match.map((item)=>{
        let chosenData: matchTable = {
          homeTeam: item.home_team.name,
          awayTeam: item.away_team.name,
          homeScore: item.stats.home_score,
          awayScore: item.stats.away_score,
          logoAwayTeam:item.away_team.logo,
          logoHomeTeam:item.home_team.logo,
          matchStart: item.match_start,
        }
        return chosenData;
      })
})
  }

  





}