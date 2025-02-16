import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortifolioService {

  private jsonUrl = 'assets/json/';

  constructor(private http: HttpClient) {}

  getSkills(): Observable<any> {
    return this.http.get<any>(this.jsonUrl.concat("skills.json"));
  }

  getCertificationsProg(): Observable<any> {
    return this.http.get(this.jsonUrl.concat("certificacoes_prog.json"));
  }

  getCertificationsAdv(): Observable<any> {
    return this.http.get(this.jsonUrl.concat("certificacoes_adv.json"));
  }
}
