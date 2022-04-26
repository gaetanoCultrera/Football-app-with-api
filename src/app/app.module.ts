import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatSliderModule } from '@angular/material/slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';


import {FootballserviceService} from './services/footballservice.service';
import { ScoreService } from './services/Score.service';
import { HomeStatsMatchComponent } from './components/home-stats-match/home-stats-match.component';
import { MatchStatsSerieAComponent } from './components/match-stats-serie-a/match-stats-serie-a.component';
import { TopScorerStatsSerieAComponent } from './components/top-scorer-stats-serie-a/top-scorer-stats-serie-a.component';
import { TopscorerService } from './services/topscorer.service';
import { LiveMatchSerieAComponent } from './components/live-match-serie-a/live-match-serie-a.component';
import { MatchStatsPremierComponent } from './components/match-stats-premier/match-stats-premier.component';
import { TopScorerStatsPremierComponent } from './components/top-scorer-stats-premier/top-scorer-stats-premier.component';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { NewsSportsComponent } from './components/news-sports/news-sports.component';
import { NewsSportsService } from './services/news-sports.service';





@NgModule({
  declarations: [
    AppComponent,
    HomeStatsMatchComponent,
    MatchStatsSerieAComponent,
    TopScorerStatsSerieAComponent,
    LiveMatchSerieAComponent,
    MatchStatsPremierComponent,
    TopScorerStatsPremierComponent,
    NewsSportsComponent,
    
  ],
  imports: [
    MatSliderModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [FootballserviceService,ScoreService,TopscorerService,NewsSportsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
