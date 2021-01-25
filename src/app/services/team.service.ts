import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Team } from '../models/Team'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  // team: ''
  constructor(private http: HttpClient) { }

  // Get Teams
  // getTeams(): Observable<Team[]> {
  //   return this.http.get<Team[]>({this.team})
  // }

}

