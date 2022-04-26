import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { responseNews } from 'src/modules/newsInterface';

@Injectable({
  providedIn: 'root'
})
export class NewsSportsService {

  constructor(private httpClient: HttpClient) { }

  getAllNewsItaly(): Observable<responseNews>{
    return this.httpClient.get<responseNews>(`${environment.endPointNews}&country=it&category=sports&language=it,en`);
  }
  getAllNewsEn():Observable<responseNews>{
    return this.httpClient.get<responseNews>(`${environment.endPointNews}&country=gb&category=sports&language=en`);
  }
}
