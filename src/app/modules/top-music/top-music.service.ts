import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TopMusicService {

  constructor(private http: HttpClient) { }

  topMusicas(){
    return this.http.get("https://spotify23.p.rapidapi.com/charts/", { params: this.criarParams(), headers: this.criarHeader()})
  }

  criarHeader():HttpHeaders {
    return new HttpHeaders()
    .set('X-rapidAPI-Host', 'spotify23.p.rapidapi.com')
    .set('X-rapidAPI-Key', '5d4a5005eemshee81e3df75d2502p178b33jsn1dcfe51f1090');
  }

  criarParams():HttpParams {
    return new HttpParams()
    .set("type", "regional")
    .set("country", "global")
    .set("recurrence", "daily")
    .set("date", "latest");
  }

}
