import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortifolioService {

  private jsonUrl = 'assets/json/skills.json';

  constructor(private http: HttpClient) {}

  getSkills(): Observable<any> {
    return this.http.get<any>(this.jsonUrl);
  }

}
