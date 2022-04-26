import { Component, OnInit } from '@angular/core';
import { TopscorerService } from 'src/app/services/topscorer.service';
import { Data,scorerTable,searchScorerTable } from 'src/modules/topScorerStatsInterface';



@Component({
  selector: 'app-top-scorer-stats-serie-a',
  templateUrl: './top-scorer-stats-serie-a.component.html',
  styleUrls: ['./top-scorer-stats-serie-a.component.css']
})
export class TopScorerStatsSerieAComponent implements OnInit {

  scorer:Data[]=[];
  userScorer:scorerTable[] = [];
  term2:string="";
  scorerDataCheck:searchScorerTable[]=[];

  constructor(private topScorerService:TopscorerService) { 
   }

  ngOnInit(): void {
    this.topScorerService.getAllTopScorerStatsSerieA().subscribe((result)=>{
      this.scorer=result.data;
      //console.log(this.scorer);
      this.userScorer=this.scorer.map((item)=>{
        let chosenData: scorerTable = {
          goals: item.goals.overall,
          playerName:item.player.player_name,
          teamName:item.team.team_name,
          matchesPlayed: item.matches_played,
        }
        return chosenData;
        
      })
    })
    
  }

  checkPlayerSerieA(term2:string) {
    this.topScorerService.getAllTopScorerStatsSerieA().subscribe((result)=>{
      this.scorer=result.data;
      this.scorerDataCheck=this.scorer.filter(item=> item.player.player_name === term2).map((item)=>{
        let chosenData: searchScorerTable = {
          goals: item.goals.overall,
          playerName:item.player.player_name,
          matchesPlayed: item.matches_played,
          minutesPlayed: item.minutes_played,
          penalties: item.penalties,
        }
        return chosenData
      });
      //console.log(this.scorerDataCheck);
      
    })
  }



   

}
