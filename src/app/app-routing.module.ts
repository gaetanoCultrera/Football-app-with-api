import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeStatsMatchComponent } from './components/home-stats-match/home-stats-match.component';
import { MatchStatsSerieAComponent } from './components/match-stats-serie-a/match-stats-serie-a.component';
import { TopScorerStatsSerieAComponent } from './components/top-scorer-stats-serie-a/top-scorer-stats-serie-a.component';
import { LiveMatchSerieAComponent } from './components/live-match-serie-a/live-match-serie-a.component';
import { MatchStatsPremierComponent } from './components/match-stats-premier/match-stats-premier.component';
import { TopScorerStatsPremierComponent } from './components/top-scorer-stats-premier/top-scorer-stats-premier.component';
import { NewsSportsComponent } from './components/news-sports/news-sports.component';


const routes: Routes = [
  {path:'',component:HomeStatsMatchComponent},//home with all stats of all match
  {path:'match/serieA',component:MatchStatsSerieAComponent},//all match of serie A 2021/2022
  {path:'match/premier',component:MatchStatsPremierComponent}, //all match of Premier 2021/2022
  {path:'scorer/serieA',component:TopScorerStatsSerieAComponent}, //all scorer of serie A 2021/2022
  {path:'scorer/premier',component:TopScorerStatsPremierComponent},  //all scorer of premier 2021/2022
  {path:'live',component:LiveMatchSerieAComponent}, //all live match
  {path:'news',component:NewsSportsComponent} //all live match
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
