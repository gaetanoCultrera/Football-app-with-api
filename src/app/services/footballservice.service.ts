import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RootObject } from 'src/modules/homeSports';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FootballserviceService {
  

  constructor(private httpClient: HttpClient) { }

  getAllData(): Observable<RootObject>{
    return this.httpClient.get<RootObject>(environment.endPointMatch);
  }


}

  