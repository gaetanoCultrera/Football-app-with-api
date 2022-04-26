import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Response,Data } from 'src/modules/topScorerStatsInterface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class TopscorerService {

  seasonIdIt:string="";
  seasonIdEn:string="";


  constructor(private httpClient: HttpClient) {
    this.seasonIdIt = '2100'; // italy
    this.seasonIdEn= "1980"
   }

  

  getAllTopScorerStatsSerieA(): Observable<Response>{
    return this.httpClient.get<Response>(`${environment.endPointTopScorers}${this.seasonIdIt}`);
  }

  getAlltopScorerStatsPremier():Observable<Response>{
    return this.httpClient.get<Response>(`${environment.endPointTopScorers}${this.seasonIdEn}`);
  }

  
}
