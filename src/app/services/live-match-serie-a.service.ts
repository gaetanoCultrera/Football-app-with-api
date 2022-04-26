import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Response,Data } from 'src/modules/matchStatsInterface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LiveMatchSerieAService {

  seasonIdIt:string="";
  seasonIdEn:string="";

  constructor(private httpClient: HttpClient) { 
    this.seasonIdIt = '2100'; // italy
    this.seasonIdEn= "1980" //En
  }


  getAllMatchLive(): Observable<Response>{
    return this.httpClient.get<Response>(`${environment.endPointLiveScore}&date_from=2022-01-01`);
  }

  

  
  

  

}




