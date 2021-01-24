import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Team } from '../models/Team'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  teamsUrl: string = 'https://jsonplaceholder.typicode.com/todos';
  teamLimit = '?_limit=5'

  constructor(private http: HttpClient) { }

  // Get Teams
  getTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(`${this.teamsUrl}${this.teamLimit}`)
  }

}

