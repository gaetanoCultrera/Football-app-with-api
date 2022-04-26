import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Response,Data } from 'src/modules/matchStatsInterface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  seasonIdIt:string="";
  seasonIdEn:string="";

  constructor(private httpClient: HttpClient) { 
    this.seasonIdIt = '2100'; // italy
    this.seasonIdEn= "1980" //En

  }

  

  getAllMatchStatsSerieA(): Observable<Response>{
    return this.httpClient.get<Response>(`${environment.endpointScore}${this.seasonIdIt}&date_from=2022-01-01`);
  }

  getAllMatchStatsPremierLeague(): Observable<Response>{
    return this.httpClient.get<Response>(`${environment.endpointScore}${this.seasonIdEn}&date_from=2022-01-01`);
  }

  searchIta(term:string): Observable<Response>{
    return this.httpClient.get<Response>(`${environment.endpointScore}${this.seasonIdIt}&date_from=${term}`);
  }

  searchEn(term:string): Observable<Response>{
    return this.httpClient.get<Response>(`${environment.endpointScore}${this.seasonIdEn}&date_from=${term}`);
  }



 

  

}
