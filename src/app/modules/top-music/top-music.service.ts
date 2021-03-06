import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TopMusicas } from 'src/app/shared/models/top-musicas.model';
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TopMusicService {

  constructor(private http: HttpClient) { }

  topMusicas(): Observable<Array<TopMusicas>>{
    return this.http.get(environment.url + "charts", { params: this.criarParams(), headers: this.criarHeader()})
    .pipe(map(this.mapTopMusicas))
  }

  private mapTopMusicas(response: any): Array<TopMusicas>{
    const topMusicas: Array<TopMusicas> = new Array()
    response.content.forEach( (element: any) => {
      topMusicas.push(new TopMusicas(element));
    });
    return topMusicas;
  }

  private criarHeader():HttpHeaders {
    return new HttpHeaders()
    .set('X-rapidAPI-Host', 'spotify23.p.rapidapi.com')
    .set('X-rapidAPI-Key', '5d4a5005eemshee81e3df75d2502p178b33jsn1dcfe51f1090');
  }

  private criarParams():HttpParams {
    return new HttpParams()
    .set("type", "regional")
    .set("country", "global")
    .set("recurrence", "daily")
    .set("date", "latest");
  }

}
